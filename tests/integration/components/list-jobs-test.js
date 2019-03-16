import { expect } from 'chai';
import Ember from 'ember';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import testSelector from 'ember-test-selectors';

describe('Integration | Component | integration/list-jobs', function() {
  setupComponentTest('Integration | Component | integration/list-jobs', {
    integration: true
  });

  let allJobsListed = {
    "jobsfeed": [
    {
      "_id": "5b2b8a9e263a5020388e87ff",
      "title": "DFX Engineer",
      "applylink": "https://www.techgig.com/jobs/DFX-Engineer/59650",
      "jd": "",
      "companyname": "Intel Technology India Pvt Ltd",
      "location": "Bengaluru/Bangalore",
      "experience": "8-13 yrs",
      "salary": "",
      "type": "",
      "skills": "clusterring, Computing, HTML, CSS",
      "startdate": "",
      "enddate": "",
      "created": "",
      "source": "techgig",
      "timestamp": 1528959791.958316,
      "__v": 0
    },
    {
      "_id": "5b2bd7f09d73a1001456c2ec",
      "title": "College Ambassador of E-Cell, IIT Bombay",
      "applylink": "https://dare2compete.com/o/college-ambassador-of-e-cell-iit-bombay-61622",
      "jd": "A student would be selected as a College Ambassador from every college based on his aptitude for business and entrepreneurship who will then get to interact with the E-Cell, IIT Bombay actively. The selected College Ambassador, in his entire tenure, would represent E-Cell, IIT Bombay in their college and would be equipped with tools that would be aimed to bring about his personal development as well as advancement of the entrepreneurial eco-system in his college.",
      "companyname": "",
      "location": "",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-07-14 00:00:00",
      "enddate": "2019-02-02 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1529599983.2246094,
      "__v": 0
    },
    {
      "_id": "5b2bd7f09d73a1001456c2ed",
      "title": "HR Intern",
      "applylink": "https://dare2compete.com/o/hr-intern-61656",
      "jd": "We are seeking for HR Intern for 2-3 months working as a valuable member of HR Team. You will gain an understanding of how the recruitment process works in an organization and what it takes to excel.",
      "companyname": "",
      "location": "",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-06-25 00:00:00",
      "enddate": "2018-08-25 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1529599983.2246094,
      "__v": 0
    },
    {
      "_id": "5b2bd7f09d73a1001456c2ee",
      "title": "Business Development",
      "applylink": "https://dare2compete.com/o/business-development-61655",
      "jd": "We are developing e-court concept model. We are also developing product floater system. We are developing an antique e-commerce platform.\nAbout the Internship:\nSelected intern's day-to-day responsibilities include:\n\n1. Coordinate with the vendors and source the vendors, arrange all logistics for the getting reseller, look out for ship owners who need branding and franchisor and add reseller products\n2. Post and use all social media portals to get the traffic \n3. Visit market and area where you can connect the resellers and product sourcing\n4. Prepare PowerPoint presentations and YouTube videos\n5. Prepare articles and blog\n6. Handle social media platforms such as Facebook and LinkedIn\n7. Call prospective clients",
      "companyname": "",
      "location": "",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-06-21 00:00:00",
      "enddate": "2018-09-30 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1529599983.2246094,
      "__v": 0
    },
    {
      "_id": "5b2bd7f09d73a1001456c2ef",
      "title": "Digital Marketing and Content Writting",
      "applylink": "https://dare2compete.com/o/digital-marketing-and-content-writting-61653",
      "jd": "We are looking for marketing executive who could work on all marketing channels to acquire clients.\n1. Facebook and linkedin promotion\n2. You tube promotion\n3. Article and blog posting\n4. Direct calling clients to make them understand model\n5. Prepare post writting and put it on social media channels\n6. Emailer campaigns to target audience\n7. Prepare power point presentations\n8. Prepare you tube video",
      "companyname": "",
      "location": "Tumkur",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-06-21 00:00:00",
      "enddate": "2018-10-31 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1529599983.2246094,
      "__v": 0
    },
    {
      "_id": "5b2bd7f09d73a1001456c2f0",
      "title": "Operations Associate",
      "applylink": "https://dare2compete.com/o/operations-associate-61651",
      "jd": "We're looking for someone to hustle with us and shape our venture from the ground up. The selected intern will get an opportunity to learn from experienced founders and tech professionals.",
      "companyname": "",
      "location": "",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "msexcle",
      "startdate": "2018-06-24 00:00:00",
      "enddate": "2018-08-24 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1529599983.2246094,
      "__v": 0
    },
    {
      "_id": "5b2bd7f09d73a1001456c2f1",
      "title": "Digital marketing",
      "applylink": "https://dare2compete.com/o/digital-marketing-61652",
      "jd": "This internship is ideal for someone who is interested in furthering his or her education and\nexperience in the world of digital marketing. This internship will provide exposure to various\naspects of digital media that may include but are not limited to social media and web updates.\nLearning objectives are achieved through training, observation,\nand “learning-by-doing” under close supervision with constructive feedback. \n Although you will on occasion be carrying out some administrative work,\nyou’ll not be the office gopher – we’re looking for somebody that can add real value to our business. In\nreturn, you’ll learn plenty and get first-hand experience in an exciting fastest growing edutech industry.",
      "companyname": "",
      "location": "",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-06-24 00:00:00",
      "enddate": "2018-09-29 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1529599983.2246094,
      "__v": 0
    },
    {
      "_id": "5b2bd7f09d73a1001456c2f2",
      "title": "Social Media Executive",
      "applylink": "https://dare2compete.com/o/social-media-executive-61650",
      "jd": "•\tManage the social media marketing strategy focusing on Facebook, Twitter, LinkedIn, Google+, YouTube, Slide Share\n•\tPlan social media campaigns, promotions and Social ad campaigns while owning & being accountable for all social media engagement metrics",
      "companyname": "",
      "location": "",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "adwords,fbforbusiness",
      "startdate": "2018-07-02 00:00:00",
      "enddate": "0000-00-00 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1529599983.2246094,
      "__v": 0
    },
    {
      "_id": "5b55f3520cabee001458c7d1",
      "title": "Operations",
      "applylink": "https://internshala.com/internship/detail/operations-internship-in-bangalore-at-oncocom1532334735",
      "jd": "",
      "companyname": "Onco.com",
      "location": "Bengaluru",
      "experience": "Fresher",
      "salary": "15000-20000 /Month                                                            ",
      "type": "Full time With job offer",
      "skills": "backoffice,msoffice",
      "startdate": "Immediately",
      "enddate": "6 Aug'18",
      "created": "23 Jul'18",
      "source": "internshala",
      "timestamp": 1532359496.928294,
      "__v": 0
    },
    {
      "_id": "5b9792a623ac4f00141a07f6",
      "title": "Sales Executive",
      "applylink": "https://www.shine.com/jobs/Sales-Executive/Amprovit-Technologies-pvt.ltd/9296137",
      "jd": "Dear Candidate, IMMEDIATE HIRING FOR Sales Executive Hereby we would like to invite you for attending the interview in our office as mentioned below. Interview Time:- 10.30 am 1.30 pm",
      "companyname": "Amprovit Technologies pvt.ltd",
      "location": "Bangalore",
      "experience": "0 to 2 Yrs",
      "salary": "",
      "type": "",
      "skills": "industry, sales, reports, state, organization, quality, support, benchmarking,b2c sales, direct sales, field sales",
      "startdate": "2018-09-11T05:35:19",
      "enddate": "2018-12-10T05:35:34",
      "created": "",
      "source": "shine",
      "timestamp": 1536660133.5731387,
      "__v": 0
    },
    {
      "_id": "5b9792d023ac4f00141a07f7",
      "title": "M-Tech Freshers",
      "applylink": "https://www.freshersworld.com/jobs/m-tech-freshers-jobs-in-thiruvananthapuram-suntec-business-solutions-pvt-ltd-technopark-370283",
      "jd": "Ltd. Technopark - Thiruvananthapuram. Job Title: Hiring of M-tech FreshersCompany: SunTec Business Solutions Pvt. Ltd.Location: Technopark,...",
      "companyname": "SunTec Business Solutions Pvt. Ltd. Technopark",
      "location": "Thiruvananthapuram",
      "experience": "",
      "salary": "",
      "type": "",
      "skills": "nodejs",
      "startdate": "",
      "enddate": "31 Dec 27",
      "created": "8 months ago",
      "source": "freshersworld",
      "timestamp": 1536660173.6688366,
      "__v": 0
    },
    {
      "_id": "5b98ebf91a245f001459c2f5",
      "title": "Internet Of Things (IoT)",
      "applylink": "https://internshala.com/internship/detail/internet-of-things-iot-internship-in-bangalore-at-k2farms-private-limited1536686896",
      "jd": "",
      "companyname": "K2farms Private Limited",
      "location": "Bengaluru",
      "experience": "Fresher",
      "salary": "8000 /Month                                                            ",
      "type": "Full time With job offer",
      "skills": "",
      "startdate": "Immediately",
      "enddate": "25 Sep'18",
      "created": "12 Sep'18",
      "source": "internshala",
      "timestamp": 1536748531.2337627,
      "__v": 0
    },
    {
      "_id": "5b98ec511a245f001459c2f8",
      "title": "Marketing",
      "applylink": "https://dare2compete.com/o/marketing-67296",
      "jd": "We are seeking a Digital marketer who will get the chance to work on a large-scale pan-India marketing campaign across multiple media.This is the platform where candidate will have an immense exposure in marketing.",
      "companyname": "",
      "location": "Mumbai",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "salesforce",
      "startdate": "2018-09-17 00:00:00",
      "enddate": "2018-11-17 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1536748624.7434754,
      "__v": 0
    },
    {
      "_id": "5b98ec511a245f001459c2f9",
      "title": "Graphic Designer",
      "applylink": "https://dare2compete.com/o/graphic-designer-67295",
      "jd": "Note: Only applicants with a strong visual sense and design process will be considered.\n\nWhat we look for:\n\n-A young hands-on Graphic Designer passionate about Branding, Design Thinking and translating Design into Business.\n-Skilled at creating relevant, user-centric and beautiful visuals\n-Up to date with the latest international trends\n-Pro-active, passionate, curious\n-Ability to interact and work with cross-functional teams and hierarchies\n-Ability to be versatile and handle multiple products, design languages and changing priorities\n-Passion for travel and events, and technology\n\nWhy us:\n\n-We are the leading Trade Show organiser in India.\n-You will be part of a full Brand Development\n-You will be able to share and defend your ideas and design decisions\n\nWe look forward to designing a new great story with you.",
      "companyname": "",
      "location": "Mumbai",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "photoshop,xd",
      "startdate": "2018-09-17 00:00:00",
      "enddate": "2018-12-30 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1536748624.7434754,
      "__v": 0
    },
    {
      "_id": "5b98ec511a245f001459c2fa",
      "title": "Campus Ambassador Programme",
      "applylink": "https://dare2compete.com/o/campus-ambassador-programme-67183",
      "jd": "We are looking for a candidate who will help us plan, execute and optimize our marketing campaigns in their respective colleges and bring more volunteers. You will work and collaborate with senior members to track and measure performance, and provide result for all efforts.",
      "companyname": "",
      "location": "Anywhere in India",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-09-09 00:00:00",
      "enddate": "2018-12-29 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1536748624.7434754,
      "__v": 0
    },
    {
      "_id": "5b98ec511a245f001459c2fb",
      "title": "Social Media Strategist",
      "applylink": "https://dare2compete.com/o/social-media-strategist-67180",
      "jd": "We are looking for a talented Social media manager to administer our social media accounts. You will be responsible for creating original text and video content, managing posts and responding to followers.\nUltimately, you should be able to handle our social media presence ensuring high levels of web traffic and customer engagement.",
      "companyname": "",
      "location": "Kochi/Cochin",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-09-30 00:00:00",
      "enddate": "2018-12-30 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1536748624.7434754,
      "__v": 0
    },
    {
      "_id": "5b98ec511a245f001459c2fc",
      "title": "Planet Green  Internship (Business Development)",
      "applylink": "https://dare2compete.com/o/planet-green-internship-business-development-67179",
      "jd": "We are looking for interns who have good communication and convincing skills who can converse people with ease, use their network and contacts and convert leads. The stipend is based on the number of converted leads. There is no limit on how much one can earn.",
      "companyname": "",
      "location": "Hyderabad",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-09-14 00:00:00",
      "enddate": "2018-12-14 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1536748624.7434754,
      "__v": 0
    },
    {
      "_id": "5b98ec511a245f001459c2fd",
      "title": "Graphic Designer",
      "applylink": "https://dare2compete.com/o/graphic-designer-67194",
      "jd": "We are a creative, digital and  branding agency, with an experience of 5 years. We provide turnkey solutions for all your marketing needs- right from design to execution , with planned marketing strategies, unparalleled creativity and self sufficient in house print technology. We offer a wide variety of products and services that businesses can use to expand their reach.  We believe that every business has its own individual identity which needs to be presented in an expressive way. \nWe help you tell your story.\nLogo Designing | E-Brochures | Social media marketing | Packaging Illustrations | Magazine & Newsletters |Flyers |Posters | Brochures | | Corporate stationery | Wedding invitations| Branding Materials.",
      "companyname": "",
      "location": "Kolkata",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-09-14 00:00:00",
      "enddate": "2018-12-14 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1536748624.7434754,
      "__v": 0
    },
    {
      "_id": "5b98ec511a245f001459c2fe",
      "title": "Lean Intern",
      "applylink": "https://dare2compete.com/o/lean-intern-67293",
      "jd": "- Strong analytical expertise combined with excellent verbal, written, and presentation skills\n\n- Outstanding facilitation and problem-solving skills\n\n- Demonstrated personal credibility with executives, leaders and staff\n\n- Ability to work effectively in a matrix organization and in cross-cultural environments\n\n- Ability to engage others in forward-thinking dialogue, facilitate consensus, obtain buy-in of senior leadership and drive for successful adoption of change initiatives\n\n- Advanced skills in data analysis, Excel and PowerPoint\n\n- Education - UG: B.Tech/B.E/MBA/M.Tech. - Any Specialization, Mechanical, Production/Industrial, Other Specialization\n\n- Experience with continuous improvement methods and tools including Lean, Six Sigma and change leadership.\n\n- Proficient in project and program management.",
      "companyname": "",
      "location": "Hyderabad,Mumbai",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-09-30 00:00:00",
      "enddate": "2019-03-30 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1536748624.7434754,
      "__v": 0
    },
    {
      "_id": "5b98ec511a245f001459c2ff",
      "title": "Business Development and Sales(Admin)",
      "applylink": "https://dare2compete.com/o/business-development-and-salesadmin-67294",
      "jd": "We are seeking a administration executive, who will us plan , execute, optimize our marketing channels,You will work independently and explore different areas of marketing and development , a best opportunity to upgrade your skills with opportunities to serve .",
      "companyname": "",
      "location": "New Delhi",
      "experience": "",
      "salary": "",
      "type": "internships",
      "skills": "",
      "startdate": "2018-09-15 00:00:00",
      "enddate": "2019-01-15 00:00:00",
      "created": "",
      "source": "dare2compete",
      "timestamp": 1536748624.7434754,
      "__v": 0
    },
    {
      "_id": "5b98ebf91a245f001459c2d8",
      "title": "Content Writing (Tennis)",
      "applylink": "https://internshala.com/internship/detail/content-writing-tennis-internship-in-bangalore-at-sportskeeda1536401512",
      "jd": "",
      "companyname": "Sportskeeda",
      "location": "Bengaluru",
      "experience": "Fresher",
      "salary": "4000 /Month                                                            ",
      "type": "Full time",
      "skills": "",
      "startdate": "Immediately",
      "enddate": "21 Sep'18",
      "created": "8 Sep'18",
      "source": "internshala",
      "timestamp": 1536748531.2337627,
      "__v": 0
    },
    {
      "_id": "5b98ebf91a245f001459c2d9",
      "title": "Business Analytics",
      "applylink": "https://internshala.com/internship/detail/business-analytics-internship-in-bangalore-at-xiaomi-technology-india-private-limited1536074239",
      "jd": "",
      "companyname": "Xiaomi Technology India Private Limited",
      "location": "Bengaluru",
      "experience": "Fresher",
      "salary": "20000-30000 /Month                                                            ",
      "type": "Full time With job offer",
      "skills": "",
      "startdate": "Immediately",
      "enddate": "18 Sep'18",
      "created": "5 Sep'18",
      "source": "internshala",
      "timestamp": 1536748531.2337627,
      "__v": 0
    },
    {
      "_id": "5b98ebf91a245f001459c2da",
      "title": "Content Writing",
      "applylink": "https://internshala.com/internship/detail/content-writing-internship-in-bangalore-at-sportskeeda1535978906",
      "jd": "",
      "companyname": "Sportskeeda",
      "location": "Bengaluru",
      "experience": "Fresher",
      "salary": "4000 /Month                                                            ",
      "type": "Full time",
      "skills": "",
      "startdate": "Immediately",
      "enddate": "17 Sep'18",
      "created": "5 Sep'18",
      "source": "internshala",
      "timestamp": 1536748531.2337627,
      "__v": 0
    },
    {
      "_id": "5b98ebf91a245f001459c2db",
      "title": "Human Resources (HR)",
      "applylink": "https://internshala.com/internship/detail/human-resources-hr-internship-in-bangalore-at-aditya-birla-fashion-retail-limited1535700644",
      "jd": "",
      "companyname": "Aditya Birla Fashion & Retail Limited",
      "location": "Bengaluru",
      "experience": "Fresher",
      "salary": "9000 /Month                                                            ",
      "type": "Full time",
      "skills": "",
      "startdate": "Immediately",
      "enddate": "14 Sep'18",
      "created": "1 Sep'18",
      "source": "internshala",
      "timestamp": 1536748531.2337627,
      "__v": 0
    }
  ]

  }



  beforeEach(function() {
    this.set('model', allJobsListed);
  });

  it('Renders list getJobs', function() {
    this.render(hbs`{{list-jobs model=model}}`);
    expect(this.$()).to.have.length(1);
  });

  it('check for presence of all jobs', function() {
    this.render(hbs`{{list-jobs model=model}}`);
    expect(this.$('[data-test-id=all-jobs]')).to.have.length(1);
  });

  it('check for presence of dropdowns and buttons', function() {
    this.render(hbs`{{list-jobs model=model}}`);
    expect(this.$('[data-test-id=experience-dropdown]')).to.have.length(1);
    expect(this.$('[data-test-id=location-select]')).to.have.length(1);
    expect(this.$('[data-test-id=search-button]')).to.have.length(1);
  });

  it('checks the sort functionality', async function() {
    await this.render(hbs`{{list-jobs model=model}}`);
    await this.$(testSelector('id', 'location-sort')).click();
    debugger;
    expect(this.$('.job .location').eq(0).text()).to.be.equal('location: ');
  });

});
