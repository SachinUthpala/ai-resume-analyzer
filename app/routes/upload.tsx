import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import FileUploader from "~/components/FileUploader";
import NavBar from "~/components/NavBar";
import { prepareInstructions } from "~/constants";
import { convertPdfToImage } from "~/lib/pdf2img";
import { usePuterStore } from "~/lib/puter";
import { generateUUID } from "~/lib/utils";

const upload = () => {

    const {auth , isLoading , fs , ai , kv} = usePuterStore();
    const navigate = useNavigate();
    const [isProcessing , setIsProcessing] = useState(false);
    const [statusText , setStatusText] = useState('');

    const [file , setFile] = useState<File | null>(null);

    const handleFileSelect = (file: File | null): void => {
        setFile(file);
    };

    const handleAnalyse = async ({
        companyName,
        jobTitle,
        jobDescription,
        file,
    }: {
        companyName: string;
        jobTitle: string;
        jobDescription: string;
        file: File;
    }) => {
        setIsProcessing(true);
        setStatusText('Uploading the File ..');
        const uploadFile = await fs.upload([file]);

        if(!uploadFile) return setStatusText('Error Uploading : Went Something Wrong');

        setStatusText('Converting to image...');
        const imageFile = await convertPdfToImage(file);
        if(!imageFile.file) return setStatusText('Error: Failed to convert PDF to image');

       setStatusText('Uploading the image...');
        const uploadedImage = await fs.upload([imageFile.file]);
        if(!uploadedImage) return setStatusText('Error: Failed to upload image');

         setStatusText('Preparing data...');
        const uuid = generateUUID();
        const data = {
            id: uuid,
            resumePath: uploadFile.path,
            imagePath: uploadedImage.path,
            companyName, jobTitle, jobDescription,
            feedback: '',
        }
        await kv.set(`resume:${uuid}`, JSON.stringify(data));

        setStatusText('Analyzing...');

        const feedback = await ai.feedback(
            uploadFile.path,
            prepareInstructions({ jobTitle, jobDescription })
        )
        if (!feedback) return setStatusText('Error: Failed to analyze resume');

         const feedbackText = typeof feedback.message.content === 'string'
            ? feedback.message.content
            : feedback.message.content[0].text;


            data.feedback = JSON.parse(feedbackText);
        await kv.set(`resume:${uuid}`, JSON.stringify(data));
        setStatusText('Analysis complete, redirecting...');
        console.log(data);

    };

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget.closest('form');
        if(!form) return;
        const formData = new FormData(form);

        const companyName = formData.get('company-name') as string;
        const jobTitle = formData.get('job-title') as string;
         const discription = formData.get('job-discription') as string;

         console.log({
            companyName , jobTitle , discription , file
         })

         if(!file) return;

         handleAnalyse({companyName , jobTitle , jobDescription: discription , file});
    }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <NavBar />

      <section className="main-section">
        <div className="page-heading py-16">
            <h1>Smart Feedback for Your Future Job</h1>
            {isProcessing ? (
                <>
                    <h2>{statusText}</h2>
                    <img src="/images/resume-scan.gif" alt="scaningImage" className="w-full" />
                </>
            ) : (
                <h2>Drop your resume for an ATS score and imporvment tips</h2>
            )}

            {!isProcessing && (
                <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                    <div className="form-div">
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" name="company-name" id="company-name" placeholder="Company Name" />
                    </div>

                    <div className="form-div">
                        <label htmlFor="job-title">Job Title</label>
                        <input type="text" name="job-title" id="job-title" placeholder="Job Title" />
                    </div>

                    <div className="form-div">
                        <label htmlFor="job-discription">Job Discription</label>
                        <textarea rows={5} name="job-discription" id="job-discription" placeholder="Job Discription" />
                    </div>


                    <div className="form-div">
                        <label htmlFor="uploader">Upload Resume</label>
                        <FileUploader onFileSelect={handleFileSelect} />
                    </div>

                    <button className="primary-button" type="submit">
                        Analyze Resume
                    </button>

                </form>
            )}
        </div>
      </section>
    
    </main>
  )
}

export default upload
