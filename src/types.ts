import {
  AmazonWebServicesS3Storage,
  AmazonWebServicesS3StorageConfig,
} from './Drivers/AmazonWebServicesS3Storage';
import { GoogleCloudStorage, GoogleCloudStorageConfig } from './Drivers/GoogleCloudStorage';
import {
  DigitalOceanS3Storage,
  DigitalOceanS3StorageConfig,
} from './Drivers/DigitalOceanS3Storage';
import {
  LocalFileSystemStorage,
  LocalFileSystemStorageConfig,
} from './Drivers/LocalFileSystemStorage';

export type {
  AmazonWebServicesS3Storage,
  AmazonWebServicesS3StorageConfig,
  GoogleCloudStorage,
  GoogleCloudStorageConfig,
  DigitalOceanS3Storage,
  DigitalOceanS3StorageConfig,
  LocalFileSystemStorage,
  LocalFileSystemStorageConfig,
};

export type StorageManagerSingleDiskConfig =
  | {
      driver: 's3';
      config: AmazonWebServicesS3StorageConfig;
    }
  | {
      driver: 'do';
      config: DigitalOceanS3StorageConfig;
    }
  | {
      driver: 'gcs';
      config: GoogleCloudStorageConfig;
    }
  | {
      driver: 'local';
      config: LocalFileSystemStorageConfig;
    }
  | {
      driver: string;
      config: unknown;
    };

export interface StorageManagerDiskConfig {
  [key: string]: StorageManagerSingleDiskConfig;
}

export interface StorageManagerConfig {
  /**
   * The default disk returned by `disk()`.
   */
  default?: string;
  disks?: StorageManagerDiskConfig;
}

export interface Response<T = unknown> {
  raw: T;
}

export interface ExistsResponse extends Response {
  exists: boolean;
}

export interface ContentResponse<ContentType> extends Response {
  content: ContentType;
}

export interface SignedUrlOptions {
  /**
   * Expiration time of the URL.
   * It should be a number of seconds from now.
   * @default `900` (15 minutes)
   */
  expiry?: number;
}

export interface SignedUrlResponse extends Response {
  signedUrl: string;
}

export interface StatResponse extends Response {
  size: number;
  modified: Date;
}

export interface FileListResponse extends Response {
  path: string;
}

export interface DeleteResponse extends Response {
  wasDeleted: boolean | null;
}
