const Button = () => {
  return (
    <div className="flex justify-center mt-10">
      <a
        href="https://drive.google.com/file/d/1W83CWLWmEUTLdZ2wDIVH1B35QstCWm4K/view?usp=drive_link"
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg text-xl px-6 py-4 text-center"
      >
        Download CV
      </a>
    </div>
  );
};

export default Button;
