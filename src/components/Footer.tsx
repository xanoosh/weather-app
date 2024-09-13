import footerImgPath from '../assets/footer-img.png';
import AutocompleteDialog from './Dialogs/AutocompleteDialog/AutocompleteDialog';

export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-3 justify-around w-full py-6 mt-auto">
      <img className="md:w-96 w-64" src={footerImgPath} alt="footer-img" />
      <AutocompleteDialog />
    </footer>
  );
}
