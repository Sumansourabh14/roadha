"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { LANGUAGES } from "@/data/constants";

export default function LanguageSelector() {
  const router = useRouter();
  const locale = useLocale();
  const languages = LANGUAGES;

  const handleChange = (value: string) => {
    document.cookie = `locale=${value}; path=/`;
    router.refresh(); // reload to apply new locale
  };

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
