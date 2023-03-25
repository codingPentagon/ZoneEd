package codingpentagon.sms.backend.models;

public class FileMetadata {

    private String name;
    private int size;
    private String pathRef;
    private String downloadUrl;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getPathRef() {
        return pathRef;
    }

    public void setPathRef(String pathRef) {
        this.pathRef = pathRef;
    }

    public String getDownloadUrl() {
        return downloadUrl;
    }

    public void setDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
    }
}
