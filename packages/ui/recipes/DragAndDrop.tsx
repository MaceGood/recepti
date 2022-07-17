import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export const DragAndDrop: React.FC = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(
    () => () => {
      convertToBase64(files);
      console.log(files);
    },
    [files]
  );

  const thumbs = files.map((file) => (
    <div
      className="inline-flex rounded-lg p-2 border border-dark m-2 w-full h-full"
      key={file.name}
    >
      <div className="flex min-w-0 overflow-hidden">
        <img
          src={file.preview}
          className="block w-auto h-full"
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className="max-w-xl m-4">
      <label className="flex justify-center w-full h-full px-4 transition border-2 border-dark border-dashed rounded-md appearance-none cursor-pointer hover:border-soft-blue focus:outline-none">
        <section className="container h-full">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} className="h-full" />
            <p className="mt-4 h-full text-center">
              Drag 'n' drop your image here, or click to select an image
            </p>
          </div>
          <aside className="flex flex-row flex-wrap m-2">{thumbs}</aside>
        </section>
      </label>
    </div>
  );
};
