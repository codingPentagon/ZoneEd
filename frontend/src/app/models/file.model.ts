export interface FileData{
  metadata:FileMetadata
  file:File
}

export interface FileMetadata {
  name :string,
  size : number,
  pathRef : string
}
