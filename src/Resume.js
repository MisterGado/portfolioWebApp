
import {Document, Page, pdfjs} from 'react-pdf';
import cvfr from './cv_fr.pdf';
import cven from './cv_en.pdf';
import {Link} from 'react-router-dom';
import './Resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () =>{
    return(
        <div>
        <center>
        <Document file={cven} onLoadError = {console.error}>
            <Page pageNumber={1} />
        </Document>
        <Document file={cvfr} onLoadError = {console.error}>
            <Page pageNumber={1} />
        </Document>
        </center>
        <Link to = '/'>
        <button className='buttonResume'>
        Back to Home page
        </button>
        </Link>
        </div>
    );
}

export default Resume;