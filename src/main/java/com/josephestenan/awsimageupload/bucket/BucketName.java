package com.josephestenan.awsimageupload.bucket;

public enum BucketName {
    PROFILE_IMAGE("upload-spring-boot");

    public String getBucketName() {
        return bucketName;
    }

    private final String bucketName;

    BucketName(String bucketName){
        this.bucketName = bucketName;
    }
}
