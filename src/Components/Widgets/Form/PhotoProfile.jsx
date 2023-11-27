import React from 'react';

const PhotoProfile = ({ image, setImage }) => {
  return (
    <div>
      <label
        htmlFor="file"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50"
      >
        Escolher Imagem
      </label>
      <label
        className={`cursor-pointer text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      >
        <input
          className="hidden "
          type="file"
          name="file"
          id="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {image ? image.name : 'Selecione uma imagem'}
      </label>
    </div>
  );
};

export default PhotoProfile;
