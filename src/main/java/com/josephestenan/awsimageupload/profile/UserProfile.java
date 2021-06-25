package com.josephestenan.awsimageupload.profile;

import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

public class UserProfile {

    private UUID userProfileId;
    private String username;
    private String userProfileImagenLink;

    public UUID getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(UUID userProfileId) {
        this.userProfileId = userProfileId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Optional<String> getUserProfileImagenLink() {
        return Optional.ofNullable(userProfileImagenLink);
    }

    public void setUserProfileImagenLink(String userProfileImagenLink) {
        this.userProfileImagenLink = userProfileImagenLink;
    }

    public UserProfile(UUID userProfileId, String username, String userProfileImagenLink) {
        this.userProfileId = userProfileId;
        this.username = username;
        this.userProfileImagenLink = userProfileImagenLink;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile that = (UserProfile) o;
        return Objects.equals(userProfileId,that.userProfileId) && Objects.equals(username,that.username) && Objects.equals(userProfileImagenLink,that.userProfileImagenLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userProfileId, username, userProfileImagenLink);
    }
}
