"use client";

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash } from "lucide-react";

const UploadFile = () => {
  // keep track of the current upload progress (percentage)
  const [progress, setProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const displayPreview = () => {
    const input = fileInputRef.current;

    if (input && input.files && input.files.length > 0) {
      const fileInput = input.files[0];
      setPreviewUrl(URL.createObjectURL(fileInput));
    }
  };

  const removeFile = () => {
    setPreviewUrl("");
  };

  // Create an AbortController instance to provide an option to cancel the upload if needed.
  const abortController = new AbortController();

  const authenticator = async () => {
    try {
      const response = await fetch("/api/upload-auth");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token, publicKey } = data;
      return { signature, expire, token, publicKey };
    } catch (error) {
      console.error("Authentication error:", error);
      throw new Error("Authentication request failed");
    }
  };

  /**
   * Handles the file upload process.
   *
   * This function:
   * - Validates file selection.
   * - Retrieves upload authentication credentials.
   * - Initiates the file upload via the ImageKit SDK.
   * - Updates the upload progress.
   * - Catches and processes errors accordingly.
   */
  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert("Please select a file to upload");
      return;
    }

    const file = fileInput.files[0];

    let authParams;
    try {
      authParams = await authenticator();
    } catch (authError) {
      console.error("Failed to authenticate for upload:", authError);
      return;
    }
    const { signature, expire, token, publicKey } = authParams;

    try {
      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName: file.name, // Optionally set a custom file name
        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 100);
        },
        // Abort signal to allow cancellation of the upload if needed.
        abortSignal: abortController.signal,
      });
      console.log("Upload response:", uploadResponse);
    } catch (error) {
      if (error instanceof ImageKitAbortError) {
        console.error("Upload aborted:", error.reason);
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.error("Invalid request:", error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.error("Network error:", error.message);
      } else if (error instanceof ImageKitServerError) {
        console.error("Server error:", error.message);
      } else {
        console.error("Upload error:", error);
      }
    }
  };

  return (
    <>
      <section className="max-w-xl mx-auto p-6 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm space-y-6 bg-white dark:bg-neutral-900 my-4">
        <section className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select a CCTV/Dashcam or any kind of video to upload
          </label>
          <Input
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            ref={fileInputRef}
            onChange={displayPreview}
            className="cursor-pointer"
          />
          <p className="text-xs text-muted-foreground">
            Only MP4 or M4V formats. Max size: 50MB
          </p>
        </section>
        {!!previewUrl && (
          <section className="relative rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
            <Button
              variant="ghost"
              size="icon"
              onClick={removeFile}
              className="absolute top-2 right-2 z-10 bg-white dark:bg-black hover:bg-red-500 hover:text-white transition"
              title="Remove video"
            >
              <Trash className="w-4 h-4" />
            </Button>
            <video
              className="w-full h-auto rounded-b-lg"
              src={previewUrl}
              controls
            />
          </section>
        )}
        <section className="flex items-center gap-4">
          <Button
            type="button"
            onClick={handleUpload}
            disabled={progress > 0 && progress < 100}
            className="cursor-pointer"
          >
            {progress > 0 && progress < 100 ? "Uploading..." : "Upload Video"}
          </Button>
          {progress > 0 && (
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}%
            </span>
          )}
        </section>

        {progress > 0 && (
          <section className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
            <section
              className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></section>
          </section>
        )}
      </section>
    </>
  );
};

export default UploadFile;
