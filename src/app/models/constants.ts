import { Certificate, Project } from "./project";

export class Const {
  ///////////////////////////////////////////// About /////////////////////////////////////////////
  public bioDataTitles = ['Full Name', 'Email ID', 'Date of Birth', 'Address', 'Location', 'Phone No.', 'Gender', 'Disability', 'Hobbies', 'Nationality'];
  public bioDataDescs = ['Achinta Mitra', 'achintamitra23@gmail.com', '23 / 10 / 1998', '31, Madan Chatterjee Lane',
  'Kolkata, West Bengal', '+91 9163824851', 'Male', 'Don\'t have any', 'Playing, Gardening, Travelling, Cooking etc.', 'Indian'];

  ///////////////////////////////////////////// Resume /////////////////////////////////////////////
  public responsibilities: any[] = [
    'Working as a Full Stack Developer with banking client for their software product development, using Spring Boot, Angular, Maria DB and Amazon Web Services.',
    'Prepared a Software Application, Spring and Angular based named "Book My Doctor Application" where appointment with the doctor makes easy and operative by a patient.',
    'In this internship I have came to know about so many new things regarding java based software development, and web based development.'
  ];

  public activities: any[] = [
    'Paticapte in College Sports, Appearing in Technical and Cultural Fests, Paticipate in Hackathons. Participated in various Competitive Programming Contests.',
    'Inter-school Cricket Player, Chess Player, Particated the various Quiz Competition, Partipated in Olympiad.'
  ];

  ///////////////////////////////////////////// Skills /////////////////////////////////////////////
  public progSkills: any[] = ['JAVA SE & EE', 'Python Programming', 'C Language', 'C++ Language', 'Javascript', 'Typescript', 'HTML 5 & CSS 3', 'PL / SQL', 'Kotlin Language'];
  public progSkillsRtng: any[] = [5, 4, 3, 3, 4, 4, 4, 3, 3];

  public subjectSkills: any[] = [
    'Data Structure and Algorithms',
    'Desing and Analysis of Algorithm',
    'Operating Systems',
    'Computer Networking',
    'Database Management System',
    'Object Oriented Programming',
    'Computer Architecture',
    'Cryptography',
    'Compiler Design',
    'Digital Electronics'
  ];
  public subjectSkillRtng: any[] = [90, 85, 85, 80, 90, 95, 85, 80, 70, 75];

  public techSkills: any[] = ['Spring Boot', 'Angular JS', 'Web Development', 'Amazon Web Services',
  'Android Application', 'Git & Github', 'Data Science', 'Maven & Gradle', 'MySql Workbench'];
  public projectsDone: any[] = [2, 2, 1, 1, 1, 6, 2, 3, 3];
  public techStartYr: any[] = [2021, 2021, 2017, 2021, 2019, 2018, 2019, 2020, 2019];

  ///////////////////////////////////////////// Projects /////////////////////////////////////////////
  public proj1 = new Project().prepareProj('Disabledroid - Android Application', 'Dec 2018 - Feb 2019', 'Java, XML, Gradle, Emulator, SQL-Lite, Speech Recogniser', 'Android Application provides features of text to speech conversion and vice versa into app to make it usable for disabled person for communication and able to use features of android apps smoothly.', 'Android');
  public proj2 = new Project().prepareProj('Face Mask Detection & Facial Recognition', 'Apr 2020 - Jul 2020', 'Python, Deep Learning, Neural Network, Tenserflow Model, Keras, OpenCV, Matplotlib', 'Face mask detection and recognition is a deep learning Convolutional neural network model that deals with mask and useful feature during Covid-19 situation and can easily detect the face from crowds.', 'Data Science');
  public proj3 = new Project().prepareProj('Movie Recommendation System Using Sentiment Analysis', 'Mar 2021 - Jun 2021', 'Python, NLP, TF-IDF Vectorization, K-NN Algorithm, SVM Model, Naive Bayes', 'This system filterised preferred movie based on rating, genre, cast etc. Then prioritization based on -ve and +ve reviews via sentiment analysis followed by \'Content based and Collaborative filtering\' recommended movies on any OTT platform.', 'Data Science');
  public proj4 = new Project().prepareProj('Book My Doctor Application (Doctient)', 'Jul 2021 - Aug 2021', 'Spring Boot & MVC, Angular 12, MySql, Node.js, Maven, Git, API & Microservices', 'This application provides patient an accessibility to book an appointment with the doctor and provide feedbacks. Patient can get to know availability dates of doctors and can see other feedbacks. Admin can do and see basic functionalities in this application.', 'Full Stack');
  public proj5 = new Project().prepareProj('Enterprise Governance Risk & Compliance', 'Oct 2021 - Present', 'Spring Boot, Angular, Maria DB, Node.js, Bitbucket, AWS, Jenkins, JIRA, Maven', 'An well structured Banking Application to maintain Banking flows activities like risk management and compliances to resolve those risks and maintain the smart and smooth banking.', 'Full Stack');
  public proj6 = new Project().prepareProj('Personal Portfolio Website - Achinta Mitra', 'May 2023 - Present', 'Angular 14, Git & Github, Javascript, Typescript, HTML 5, CSS 3', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', 'Web App');
  public projList = [this.proj1, this.proj2, this.proj3, this.proj4, this.proj5, this.proj6];

  public cert1 = new Certificate().prepareCert('India Innovation Challenge Design Contest 2019', 'Texas Instruments', 'Nov 2019');
  public cert2 = new Certificate().prepareCert('Future Proof Hackathon', 'Techno India Group', 'Aug 2020');
  public cert3 = new Certificate().prepareCert('Pre - Education Program (PEP - 2020)', 'EPAM Systems', 'Oct 2020');
  public cert4 = new Certificate().prepareCert('JEE Full Stack 2.0 with Angular', 'Capgemini', 'Sep 2021');
  public certList = [this.cert1, this.cert2, this.cert3, this.cert4];
}
