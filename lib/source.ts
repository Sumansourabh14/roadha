// .source folder will be generated when you run `next dev`
import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/road-safety/beginner",
  source: docs.toFumadocsSource(),
});
