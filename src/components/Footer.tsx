import footerImgPath from '../assets/footer-img.png';
export default function Footer() {
  return (
    <footer className="flex justify-around w-full py-6 mt-auto">
      <img className="md:w-96 w-64" src={footerImgPath} alt="footer-img" />
    </footer>
  );
}
