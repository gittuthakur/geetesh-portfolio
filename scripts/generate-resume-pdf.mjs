import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const outPath = path.resolve('public/resume/Geeta-Ram-Resume.pdf');
fs.mkdirSync(path.dirname(outPath), { recursive: true });

const doc = new PDFDocument({ size: 'A4', margin: 50 });
doc.pipe(fs.createWriteStream(outPath));

const heading = 'GEETA RAM';
const subtitle = 'Senior Front-End Developer | UI/UX Designer';

const sections = [
  {
    title: 'Contact',
    lines: [
      'Phone: +91 7307521100',
      'Email: gittuthakur@gmail.com.com',
      'LinkedIn: https://www.linkedin.com/in/geeta-ram-5220512a',
      'Location: Chandigarh, Mohali, Delhi NCR'
    ]
  },
  {
    title: 'Summary',
    lines: [
      'Results-driven Senior Front-End Developer and UI/UX Designer with 14+ years of experience designing and developing responsive web applications, enterprise portals, SaaS platforms, custom Liferay themes, CMS solutions, and customer-centric digital products.',
      'Expertise in React.js, JavaScript, TypeScript, HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, Figma, Adobe XD, and modern frontend development practices.'
    ]
  },
  {
    title: 'Experience',
    lines: [
      'Netsmartz | Senior Front-End Developer | UX/UI Designer | 07/2012 - Present',
      'Classic Informatics | Front-End Developer | 01/2011 - 07/2012'
    ]
  },
  {
    title: 'Core Skills',
    lines: [
      'React.js, JavaScript, TypeScript, HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, Material UI, Angular',
      'UI/UX Design, Design Systems, Wireframing, Prototyping, Figma, Adobe XD, Accessibility (WCAG)',
      'REST API Integration, Performance Optimization, Cross-Browser Compatibility, Agile Scrum'
    ]
  }
];

doc.font('Helvetica-Bold').fontSize(24).text(heading);
doc.moveDown(0.3);
doc.font('Helvetica').fontSize(12).text(subtitle);
doc.moveDown();

for (const section of sections) {
  doc.font('Helvetica-Bold').fontSize(14).text(section.title);
  doc.moveDown(0.35);
  doc.font('Helvetica').fontSize(10);

  for (const line of section.lines) {
    doc.text(line, { lineGap: 2 });
  }

  doc.moveDown();
}

doc.end();
console.log(`Generated PDF: ${outPath}`);
