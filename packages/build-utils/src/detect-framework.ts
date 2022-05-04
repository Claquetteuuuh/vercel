import { Framework } from '@vercel/frameworks';
import { DetectorFilesystem } from './detectors/filesystem';
import { matches } from './matches';

export interface DetectFrameworkOptions {
  fs: DetectorFilesystem;
  frameworkList: readonly Framework[];
}

export async function detectFramework({
  fs,
  frameworkList,
}: DetectFrameworkOptions): Promise<string | null> {
  for (const framework of frameworkList) {
    if (await matches(fs, framework)) {
      return framework.slug;
    }
  }

  return null;
}
