// In the script.js file, add this doctor database near the top
const doctorsDatabase = {
  "Arunachal Pradesh": [
    {
      name: "Dr. Sudhakar Choubey",
      specialty: "Neurologist",
      hospital: "Sanjivani Diagnostics & Hospital",
      phone: "07947114690",
      image: "https://media.curofy.com/33f62918290cb2fb9757bb9764c5e90d_1.jpg",
    },

    {
      name: "Dr Pallabi Konwar",
      specialty: "Neuropsychiatry",
      hospital: "Kuhi Medicos",
      phone: "07947423920",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-KfUeHIap46DT0WA2swtPm_h15cJpiS_5w&s",
    },
  ],

  Goa: [
    {
      name: "Dr. Amrut S D",
      specialty:
        "stroke, epilepsy, movement disorders, memory impairment, nerve-muscle diseases",
      hospital: "Manipal Hospital Goa",
      phone: "not specified",
      image:
        "https://www.manipalhospitals.com/uploads/doctors_photo/best-neurologist-in-goa-dr-amrut-suresh-dhulappanavar.webp",
    },
    {
      name: "Dr. Parul Dubey ",
      specialty:
        "neuromuscular disorders,headache issues, stroke management,epilepsy",
      hospital: "Manipal Hospital Goa",
      phone: "not specified",
      image:
        "https://www.manipalhospitals.com/uploads/doctors_photo/dr-parul-dubey-consultant-neurology.png",
    },
    {
      name: "Dr. Ravindra Agrawal",
      specialty: "Psychiatrist",
      hospital: "Manipal Hospital Goa",
      phone: "not specified",
      image:
        "https://imagesx.practo.com/providers/dr-ravindra-agrawal-psychiatrist-north-goa-49dd5fdc-c426-4a3e-ab24-6d54b385e718.jpg?i_type=t_70x70-2x-webp",
    },
  ],

  "Himachal Pradesh": [
    {
      name: "Dr. Praveen Thakur",
      specialty: "Neurologist",
      hospital: "Shree Balaji Hospital",
      phone: "07947115947",
      image:
        "https://content.jdmagicbox.com/comp/kangra/v1/9999p1892.1892.231031195517.i8v1/catalogue/dr-praveen-thakur-shree-balaji-hospital--adarsh-colony-kangra-cagb8xx01e.jpg",
    },
  ],
  Manipur: [
    {
      name: "Dr. Asis Bhattacharya",
      specialty: "Neurologist",
      hospital: "Vinakaya Clinic",
      phone: "07487943199",
      image:
        "https://neurologistinagartala.com/wp-content/uploads/2022/09/IMG_20220912_123340847-1-829x1024.jpg",
    },
    {
      name: "Dr. Rupam Hazarika ",
      specialty: "Neurologist",
      hospital: "Apeksha Hospital",
      phone: "07411578091",
      image:
        "https://content.jdmagicbox.com/comp/dibrugarh/u9/9999px373.x373.230821082657.y7u9/catalogue/dr-rupam-hazarika-neurologist-graham-bazar-dibrugarh-neurofunctional-surgeons-tmri41nc1g.jpg",
    },
  ],

  Meghalaya: [
    {
      name: "Dr. Panchanon Deori Bharali",
      specialty: "Neurologist",
      hospital: "Medineuro Healthcare Centre",
      phone: "09725489245",
      image:
        "https://content.jdmagicbox.com/comp/siliguri/h9/9999px353.x353.150803170509.q8h9/catalogue/dr-panchanon-deori-bharali-sevoke-road-siliguri-neurologists-9m2pxqg1a2.jpg",
    },
    {
      name: "Dr Binod Sarmah ",
      specialty: "Neurologist",
      hospital: "Aditya Hospital",
      phone: "07383409306",
      image:
        "https://content.jdmagicbox.com/comp/dibrugarh/t6/9999px373.x373.211028193505.i2t6/catalogue/dr-binod-sarmah-diblugarh-dibrugarh-neurologists-y4tmy65gvr.jpg",
    },
  ],

  Mizoram: [
    {
      name: "Dr. Ratnadip Bose",
      specialty: "Neurologist",
      hospital: "Jeevan Jyoti Institute Of Medical Sciences",
      phone: "07947134590",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHhyta6Rns1G1nCljUkF71zHxVKesiKGmhQ&s",
    },
    {
      name: "Dr. Debasattwa Bhattacharya",
      specialty: "Neurologist",
      hospital: "ILS Hospital",
      phone: "07947420909",
      image:
        "https://cdn.hexahealth.com/Image/webp/480x480/1723031762246-923029246.webp",
    },
  ],

  Nagaland: [
    {
      name: "Dr. N K Das",
      specialty: "Neurologist",
      hospital: "Health City Hospital",
      phone: "07947429514",
      image:
        "https://healthcityhospital.com/files/16839729219468e97694e0515b8f1f8f.jpg",
    },
    {
      name: "Dr. Zakir Hussain",
      specialty: "Neurologist",
      hospital: "Advance Neuro Science Hospital",
      phone: "07947146575",
      image:
        "https://content.jdmagicbox.com/comp/guwahati/a2/9999px361.x361.181111081948.p4a2/catalogue/dr-zakir-hussain-advance-neuro-science-hospital-ganeshguri-guwahati-neurologists-91fjzh6flb.jpg",
    },
  ],

  Sikkim: [
    {
      name: "Dr Joydeep Dey",
      specialty: "Neurologist",
      hospital: "Rudraksh Superspeciality Care",
      phone: "07490016384",
      image:
        "https://content.jdmagicbox.com/comp/siliguri/m9/9999px353.x353.190718114049.r3m9/catalogue/dr-joydeep-dey-pradhan-nagar-siliguri-neurologists-ppjtw1hqik.jpg",
    },
    {
      name: "Dr. Swayam Prakash",
      specialty: "Neurologist",
      hospital: "Neotia Getwel Healthcare Centre",
      phone: "07942698917",
      image:
        "https://content.jdmagicbox.com/comp/siliguri/g7/9999px353.x353.151215121826.j4g7/catalogue/dr-swayam-prakash-matigara-siliguri-neurologists-ns3qs.jpg",
    },
  ],

  Tripura: [
    {
      name: "Dr. Srinivas Botla",
      specialty: "Neurosurgeon",
      hospital: "Yashoda Hospitals Medical Center",
      phone: "not specified",
      image:
        "https://www.yashodahospitals.com/wp-content/uploads/2023/08/Dr.-Srinivas-Botla.png",
    },

    {
      name: "Dr. Asis Bhattacharya",
      specialty: "Neurologist",
      hospital: "Vinakaya Clinic",
      phone: "07487943199",
      image:
        "https://neurologistinagartala.com/wp-content/uploads/2022/09/IMG_20220912_123340847-1-829x1024.jpg",
    },
  ],
  Maharashtra: [
    {
      name: "Dr. Rajesh Patil",
      specialty: "Neurologist, Movement Disorder Specialist",
      hospital: "Jaslok Hospital, Mumbai",
      phone: "(022) 6657-3333",
      image: "https://tnmcnair.edu.in/admin/data/uploads/2_673286.jpg",
    },

    {
      name: "Dr. Rajan M Shah",
      specialty: "Neurology, Neurosurgery",
      hospital: "Not specified",
      phone: "Not specified",
      image:
        "https://max-website20-images.s3.ap-south-1.amazonaws.com/dr_rajan_shah_bad91cbb3f.jpg",
    },
    {
      name: "Dr. Dinesh Singh",
      specialty: "Neurology",
      hospital: "Neuron Advance Neuro Care Centre, Mumbai",
      phone: "Not specified",
      image:
        "https://cdn.hexahealth.com/Image/webp/480x480/1730892045298-137948404.webp",
    },
    {
      name: "Dr. Nilesh Palasdeokar",
      specialty: "Neurology",
      hospital: "Brain & Spine Clinic",
      phone: "Not specified",
      image: "https://noblehrc.com/uploads/doctor/1673248213.png",
    },
  ],
  Delhi: [
    {
      name: "Dr. Amit Sharma",
      specialty: "Neurologist",
      hospital: "AIIMS, New Delhi",
      phone: "(011) 2658-8500",
      image:
        "https://i1.rgstatic.net/ii/profile.image/418483708940291-1476785700130_Q512/Amit-Sharma-16.jpg",
    },
    {
      name: "Dr. Manvir Bhatia",
      specialty: "neurologist and sleep specialist",
      hospital: "neurology sleep centre, new delhi",
      phone: "+91-9643500270",
      image:
        "https://www.isda.co.in/wp-content/uploads/2015/10/manvirBhatia.jpg",
    },
    {
      name: "Dr. Atul Prasad",
      specialty: "neurologist",
      hospital: "blk-max super speciality hospital, new delhi",
      phone: "not specified",
      image:
        "https://neurohealth.in/wp-content/uploads/2021/07/Dr.-Atul-Prasad.jpg",
    },
    {
      name: "Dr. Rajiv Anand",
      specialty: "neurologist",
      hospital: "dr. rajiv anand clinic, new delhi",
      phone: "not specified",
      image:
        "https://karetrip.com/_next/image?url=https%3A%2F%2Fdxfqlcpql5f3t.cloudfront.net%2Fdoctors%2Fdr-rajiv-anand.webp&w=828&q=75",
    },
    {
      name: "Dr. Achal Kumar Srivastava",
      specialty: "neurologist",
      hospital: "all india institute of medical sciences (aiims), new delhi",
      phone: "not specified",
      image:
        "https://www.bing.com/th/id/OIP.vMxHy-JmJmtruhcy9uB1ZAHaHa?w=179&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  ],
  Karnataka: [
    {
      name: "Dr. Nandini Rao",
      specialty: "Movement Disorder Specialist",
      hospital: "NIMHANS, Bangalore",
      phone: "(080) 2699-5000",
      image:
        "https://www.orientblackswan.com/booklaunchimages-new/9789354427305_bl08.JPG",
    },
    {
      name: "Dr. S. Saravanan",
      specialty: "Neurological disorders",
      hospital: "Sagar Hospitals, Jayanagar, Bengaluru",
      phone: "Not specified",
      image:
        "https://sagarhospitals.in/wp-content/uploads/2020/03/Sarvanan-S.jpg",
    },
    {
      name: "Dr. Rajesh Shetty",
      specialty: "Neurology",
      hospital: "First Neuro Hospital, Mangaluru",
      phone: "+91 824-2276633",
      image: "https://www.firstneuro.in/img/docter/rajesh.jpg",
    },
    {
      name: "Dr. Mahendra J. V",
      specialty:
        "Stroke, Epilepsy, Neuroinfection, Neuromuscular diseases, Cognitive Neurology",
      hospital: "Ramaiah Memorial Hospital, Bengaluru",
      phone: "+91 80 6215 3400",
      image:
        "https://msrmh.com/wp-content/uploads/2021/12/Dr-Mahendra-Javali-16.jpg",
    },
    {
      name: "Dr. Raghavendra S",
      specialty: "Neurology",
      hospital: "Manipal Hospital, Millers Road and Yeshwanthpur, Bengaluru",
      phone: "+91 63665 30173",
      image:
        "https://www.manipalhospitals.com/uploads/doctors_photo/dr-s-raghavendra-consultant-neurology.png",
    },
  ],
  "Tamil Nadu": [
    {
      name: "Dr. Karthik Sundaram",
      specialty: "Neurologist",
      hospital: "Apollo Hospitals, Chennai",
      phone: "(044) 2829-3333",
      image:
        "https://content.jdmagicbox.com/comp/madurai/e2/0452px452.x452.170628073220.i9e2/catalogue/dr-karthik-s-n-apollo-speciality-hospital-k-k-nagar-madurai-neurologists-6v8p26-250.jpg",
    },
    {
      name: "Dr. G. Balamurali",
      specialty: "Spine Surgery, Neurosurgery",
      hospital: "Kauvery Hospital, Chennai",
      phone: "Not specified",
      image:
        "https://www.kauveryhospital.com/wp-content/uploads/2024/10/Dr-Balamurali-Spine-and-neurosurgery2019-02-18-11_48_52am.jpg",
    },
    {
      name: "Dr. P. Keerthivasan",
      specialty: "Neurology",
      hospital: "Kauvery Hospital, Chennai",
      phone: "Not specified",
      image:
        "https://www.kauveryhospital.com/wp-content/uploads/2024/10/Dr.Keerthivasan2019-09-23-11_15_37am.jpg",
    },
    {
      name: "Dr. Prithika Chary",
      specialty: "Neurology",
      hospital: "Kauvery Hospital, Chennai",
      phone: "Not specified",
      image:
        "https://www.kauveryhospital.com/wp-content/uploads/2024/10/Dr-Pritika-chary2023-01-04-12_11_29pm.jpg",
    },
    {
      name: "Dr. Sivarajan",
      specialty: "Neurology",
      hospital: "Kauvery Hospital, Chennai",
      phone: "Not specified",
      image:
        "https://www.kauveryhospital.com/wp-content/uploads/2024/10/Dr-Sivarajan-thandeeswaran-neurology-_-stroke2019-02-18-01_01_32pm.jpg",
    },
  ],
  "Andhra Pradesh": [
    {
      name: "Dr. Sunitha Reddy",
      specialty: "Parkinson's Specialist",
      hospital: "Care Hospitals, Hyderabad",
      phone: "(040) 3041-8888",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHfzZ8oz2V5Jg1BvFbygXqRdTuK7_cavH3XA&s",
    },
    {
      name: "Dr. Mohana Rao Patibandla",
      specialty:
        "Stroke Care, Epilepsy Management, Movement Disorders, Headache and Migraine Treatment, Neurodegenerative Diseases, Pediatric Neurology",
      hospital: "Dr. Rao's Hospital",
      phone: "090100 56444",
      image:
        "https://www.bing.com/th/id/OIP.ltVwZd5Ahi7AGojIdXnHAgHaEK?w=180&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      name: "Dr. Pradeep Reddy",
      specialty:
        "Headache, Stroke, Vertigo, Epilepsy, Dementia, Movement Disorders",
      hospital: "Narayanadri Hospital",
      phone: "9972897525",
      image:
        "https://www.asterhospitals.in/sites/default/files/styles/doctors_details_xl/public/2023-05/dr-v-pradeep-kumar-reddy-neurologist-in-tirupati.jpg.webp?itok=bAqNBFrH",
    },
    {
      name: "Dr. Murali Chekuri",
      specialty:
        "Stroke, Headache Management, Epilepsy, Dementia, Parkinson's Disease, General Neurological Disorders",
      hospital: "Manipal Hospitals, Vijayawada",
      phone: "1800 102 5555",
      image:
        "https://www.logintohealth.com/assets/uploads/doctors/7a78a5d52b208aa6e36e23626594304e.jpg",
    },
    {
      name: "Dr. Somasundaram Kumaravelu",
      specialty:
        "Stroke, Epilepsy, Migraine and headache disorders, Parkinson's disease, Memory-related disorders",
      hospital: "Aster Ramesh Hospital, Vijayawada",
      phone: "8662-463-463",
      image:
        "https://www.bing.com/th/id/OIP.xffkL0D7W8whvVx1onqVeQAAAA?w=141&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  ],
  Telangana: [
    {
      name: "Dr. Arjun Varma",
      specialty: "Neurologist",
      hospital: "Yashoda Hospitals, Hyderabad",
      phone: "(040) 4567-4567",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypkeMIh92VeyzVI8aDK62X3_-rqNXJn7c-g&s",
    },
    {
      name: "Dr. T. Siddartha Reddy",
      specialty:
        "Stroke, Epilepsy, Headache, Movement Disorders, Neuromuscular Disorders",
      hospital: "Siddarth Neuro Center, Hyderabad",
      phone: "+91 40 4189 4777",
      image:
        "https://www.bing.com/th/id/OIP.7bYXOnKYOZ6cpu8kWhA-HAHaF7?w=154&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      name: "Dr. Suresh Babu P",
      specialty:
        "Stroke, Epilepsy, Headache, Movement Disorders, Neuromuscular Disorders",
      hospital: "Arete Hospitals, Gachibowli, Hyderabad",
      phone: "Not specified",
      image:
        "https://www.bing.com/th/id/OIP.Z7m6YxikQebAtxuRQ_dcpQAAAA?w=114&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      name: "Dr. D. Sreedhar",
      specialty: "Neurological Disorders",
      hospital: "SVS Hospital, Kachiguda, Hyderabad",
      phone: "Not specified",
      image:
        "https://www.bing.com/th/id/OIP.DLB2-XnvRQfiGoH0iW0bEgHaIM?w=147&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      name: "Dr. Srikant Jawalkar",
      specialty: "Neurological Disorders",
      hospital: "Dr. Srikant Neuro and Ortho Centre, Lakdikapul, Hyderabad",
      phone: "Not specified",
      image:
        "https://www.bing.com/th/id/OIP.Rex1Bbpnit20eq-edEptWAAAAA?w=120&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  ],
  Kerala: [
    {
      name: "Dr. Maya Nair",
      specialty: "Movement Disorder Specialist",
      hospital: "Amrita Institute, Kochi",
      phone: "(0484) 285-1234",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQE1_BSc4yWmcQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1669276134272?e=2147483647&v=beta&t=Js_H-rexeDM8HJp5qJMfRXoozbOnfhaj4kOfoidJuHc",
    },
    {
      name: "Dr. Reji Paul",
      specialty: "Sleep Disorders, Stroke, Multiple Sclerosis",
      hospital: "Aster Medcity, Kochi",
      phone: "Not specified",
      image:
        "https://www.bing.com/th/id/OIP.VRUIwr9lBbitEoGGDQuoYgAAAA?w=154&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      name: "Dr. Shyma M. M.",
      specialty: "Neurological disorders",
      hospital: "Sunrise Hospital, Ernakulam",
      phone: "Not specified",
      image:
        "https://sunrisehospitalcochin.com/storage/doctor/profile_image/wibZLgA9GLckZh86eu6EM9UDHjurydA2LJ39Ugz1.jpg",
    },
    {
      name: "Dr. Syamlal S",
      specialty:
        "Stroke, Epilepsy, Multiple Sclerosis, Parkinson's disease, Peripheral neuropathy",
      hospital: "KIMS Health, Thiruvananthapuram",
      phone: "Not specified",
      image:
        "https://www.bing.com/th/id/OIP.NzZJIW_-lOedbNr0c0SnLQAAAA?w=149&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      name: "Dr. K. S. Ramesh",
      specialty: "Neurodegenerative disorders, Stroke",
      hospital:
        "Sree Chitra Tirunal Institute for Medical Sciences and Technology (SCTIMST), Thiruvananthapuram",
      phone: "Not specified",
      image:
        "https://cdn.prod.website-files.com/659c9d2768dc328628d30423/65a805da75f1e28fe1102d85_Dr.%20K%20Ramesh.jpg",
    },
  ],
  Gujarat: [
    {
      name: "Dr. Rakesh Patel",
      specialty: "Neurologist",
      hospital: "Sterling Hospitals, Ahmedabad",
      phone: "(079) 4009-9999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraoyQqRRST_PkW9OMH6UNZu5EtmZpscpOsQ&s",
    },
    {
      name: "Dr. Sudhir V. Shah",
      specialty:
        "Epilepsy, Stroke, Movement disorders, Dementia, Neuromuscular disorders",
      hospital:
        "KM School of PG Medicine and Research, Sheth V. S. General Hospital, Ahmedabad",
      phone: "Not specified",
      image:
        "https://www.bing.com/th/id/OIP.RS6TJ5n4c4VgHQlzUu3VDQAAAA?w=135&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      name: "Dr. Vishal Jogi",
      specialty: "Headache, Migraine, Epilepsy, Stroke, Movement disorders",
      hospital: "Setu Neurology Clinic, Ahmedabad",
      phone: "+91 84698 65577",
      image:
        "https://www.bing.com/th/id/OIP.9JGK-T-AUDxr9Mzoy-e_1QHaJq?w=146&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      name: "Dr. Prayag Makwana",
      specialty:
        "Stroke, Epilepsy, Migraine, Vertigo, Parkinson's disease, Multiple Sclerosis, CNS tuberculosis",
      hospital: "INS Hospital, Surat",
      phone: "+91 95585 55150",
      image:
        "https://www.bing.com/th/id/OIP.1fr7k092L1i5jKZU8KyOqAHaLH?w=120&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
      name: "Dr. Bhavin Upadhyay",
      specialty: "Neurological disorders, Stroke, Epilepsy, Headache disorders",
      hospital: "Neuro Care Clinic, Vadodara",
      phone: "Not specified",
      image:
        "https://assets.lybrate.com/img/documents/doctor/dp/3bb6c0bdb73166807966b0ebbbef92c3/Neurology-Bhavin-Vadodara-c1420e",
    },
  ],
  Rajasthan: [
    {
      name: "Dr. Kavita Singh",
      specialty: "Parkinson's Specialist",
      hospital: "Fortis Escorts, Jaipur",
      phone: "(0141) 254-7000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uY6DQpfZYyyKEsPLX2sqUidgQ6IOjpR_ow&s",
    },
    {
      name: "Dr. Vikram Bohra",
      specialty:
        "Stroke, Brain Hemorrhage, Epilepsy, Parkinson's Disease, Migraine, Headache, Spinal Cord Disorders",
      hospital: "Rajasthan Hospital, Jaipur",
      phone: "+91 95303 07046",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoeZ9QDDE2YyV_4Cw-6aUHOsO1HdbEEl1Ew&s",
    },
    {
      name: "Dr. Prithvi Giri",
      specialty: "Neurological Disorders",
      hospital: "Medinova Clinic, Jaipur",
      phone: "Not specified",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMfAq-nKWYbeEIgYb82MH0-c9_qNeNt4TLSg&s",
    },
    {
      name: "Dr. Rahul Gupta",
      specialty: "Neurological Disorders",
      hospital: "Not specified",
      phone: "Not specified",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3A8QRzwO5g8HfjVJS8V_6M8rDu519_vYNNg&s",
    },
    {
      name: "Dr. Tarachand Joshi",
      specialty: "Neurological Disorders",
      hospital: "Not specified",
      phone: "Not specified",
      image:
        "https://www.eternalhospital.com/uploadedfiles/gallery/1686999713_Doctor-Images_Resize-262x329-Dr.-Tarachand-Joshi.jpg",
    },
  ],
  "West Bengal": [
    {
      name: "Dr. Subhash Banerjee",
      specialty: "Neurologist",
      hospital: "AMRI Hospitals, Kolkata",
      phone: "(033) 6680-0000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnW9erI-Fqhq0gt20UHl6tz4eDUb282NQWzw&s",
    },
    {
      name: "Dr. Sitansu Sekhar Nandi",
      specialty: "Neurologist",
      hospital: "The Calcutta Medical Research Institute, Kolkata",
      phone: "+91 98310 00223",
      image:
        "https://ckbirlahospitals.com/cmri/uploadedfiles/gallery/1628937197_Sitansu-Sekhar-Nandi.jpg",
    },
    {
      name: "Dr. Arabinda Mukhopadhyay",
      specialty: "Neurological disorders",
      hospital: "The Calcutta Medical Research Institute, Kolkata",
      phone: "Not specified",
      image:
        "https://imagesx.practo.com/providers/dr-arabinda-mukhopadhyay-neurologist-kolkata-0a6a232d-cdb8-4ec4-8107-22633dd81596.jpg?i_type=t_70x70-2x-webp",
    },
    {
      name: "Dr. Prosenjit Chakraborty",
      specialty: "Neurological disorders",
      hospital: "Fortis Hospital - Anandapur, Kolkata",
      phone: "Not specified",
      image:
        "https://imagesx.practo.com/providers/dr-prosenjit-chakraborty-neurologist-kolkata-5551597e-bcae-48d7-b919-0716b1a284a7.jpg?i_type=t_70x70-2x-webp",
    },
  ],
  Punjab: [
    {
      name: "Dr. Harpreet Kaur",
      specialty: "Movement Disorder Specialist",
      hospital: "Fortis Hospital, Mohali",
      phone: "(0172) 469-2222",
      image: "https://randomuser.me/api/portraits/women/49.jpg",
    },
    {
      name: "Dr. Arun K. Dhanuka",
      specialty: "Neurological disorders",
      hospital: "DMC Hospital, Ludhiana",
      phone: "+91 161 230 1700",
      image:
        "https://content3.jdmagicbox.com/comp/ludhiana/64/0161p161std10464/catalogue/dr-arun-k-dhanuka-ferozepur-road-ludhiana-neurologists-icls9uwzbm.jpg",
    },
    {
      name: "Dr. Amit Mittal",
      specialty: "Brain and spine surgery, Neurological disorders",
      hospital: "Neuro Life Brain & Spine Centre, Ludhiana",
      phone: "+91 98765 43210",
      image:
        "https://neurolifebrainandspine.com/wp-content/uploads/2022/02/pic.png",
    },
    {
      name: "Dr. Sukhdeep Singh Jhawar",
      specialty: "Neurosurgery, Spine surgery",
      hospital: "Deep Hospital, Ludhiana",
      phone: "+91 98147 00000",
      image:
        "https://content.jdmagicbox.com/comp/ludhiana/d4/0161px161.x161.170520231501.r1d4/catalogue/dr-sukhdeep-singh-jhawar-brain-and-spine-surgeon-sherpur-chowk-ludhiana-neurologists-20iunvt.jpg",
    },
    {
      name: "Dr. Karanbir Singh",
      specialty: "Neurological disorders",
      hospital: "Apex Hospital, Jalandhar",
      phone: "+91 181 245 5555",
      image:
        "https://content.jdmagicbox.com/comp/jalandhar/f7/0181px181.x181.170609094159.r2f7/catalogue/dr-karanbir-singh-apex-hospital-jalandhar-city-jalandhar-neurologists-kGYhjACFQG-250.jpg",
    },
  ],
  Haryana: [
    {
      name: "Dr. Vikram Yadav",
      specialty: "Neurologist",
      hospital: "Medanta - The Medicity, Gurugram",
      phone: "(0124) 414-1414",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
    },
    {
      name: "Dr. Mayank Chawla",
      specialty:
        "Stroke, Epilepsy, Headache disorders, Movement disorders, Neuromuscular diseases",
      hospital: "Max Hospital, Gurgaon",
      phone: "Not specified",
      image: "https://d35oenyzp35321.cloudfront.net/DSC_09613_f0e2a36e56.jpeg",
    },
    {
      name: "Dr. Mohamed Shoaib",
      specialty:
        "Stroke, Epilepsy, Headache disorders, Movement disorders, Neuromuscular diseases",
      hospital: "Fortis Memorial Research Institute, Gurgaon",
      phone: "Not specified",
      image:
        "https://imagesx.practo.com/providers/dr-mohamed-shoaib-neurosurgeon-delhi-658344fc-f2be-4efe-9332-d4981e92b024.jpg?i_type=t_70x70-2x-webp",
    },
    {
      name: "Dr. Kapil Agarwal",
      specialty:
        "Epilepsy, Headache, Stroke, Movement disorders, Multiple sclerosis",
      hospital: "W Pratiksha Hospital, Gurgaon",
      phone: "+91 98185 38242",
      image:
        "https://www.marengoasiahospitals.com/static/uploads/abe0db5a-85d1-4f48-b1f8-455858e90f9f-1683977377675.jpg",
    },
  ],
  "Uttar Pradesh": [
    {
      name: "Dr. Anjali Mishra",
      specialty: "Parkinson's Specialist",
      hospital: "Sanjay Gandhi PGIMS, Lucknow",
      phone: "(0522) 249-5000",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    {
      name: "Dr. Robin Bansal",
      specialty: "Stroke, Epilepsy, Headache",
      hospital: "Not specified",
      phone: "Not specified",
      image:
        "https://imagesx.practo.com/providers/dr-robin-bansal-neurologist-agra-0903b4b7-5182-4a55-9c3d-c593f19d9ac0.jpg?i_type=t_100x100-4x",
    },
    {
      name: "Dr. Bhawana Kumari",
      specialty: "Neurological disorders",
      hospital: "Lokpriya Hospital, Meerut",
      phone: "Not specified",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWF6_doJs2yO8naTjRvYZKfPJGHoBevosvzA&s",
    },
    {
      name: "Dr. Nirmal Pandey",
      specialty: "Neurological disorders",
      hospital: "Regency Hospital Tower-1, Kanpur",
      phone: "+91-5123501111",
      image:
        "https://i1.rgstatic.net/ii/profile.image/710222049988627-1546341540495_Q512/Nirmal-Pandey-2.jpg",
    },
    {
      name: "Dr. Prashant Sharma",
      specialty: "Neurological disorders",
      hospital: "Prashant Neuro, Meerut",
      phone: "+91 70111 66032",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFe3IOYHm_QDwBzZolz7q2Q0sON1tGpjhTQ&s",
    },
  ],
  Bihar: [
    {
      name: "Dr. Ramesh Kumar",
      specialty: "Neurologist",
      hospital: "AIIMS, Patna",
      phone: "(0612) 258-5000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnT54wxJGiZVcIrmkzKRVGa2w4icbbj7Jlag&s",
    },
    {
      name: "Dr. Abhishek Kumar",
      specialty:
        "Brain diseases, Spinal disorders, Neurotrauma, Neuro-oncology",
      hospital: "Shyam Neuro Centre, Khajpura, Patna",
      phone: "+91-9798932725",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJPrfiGdpp7B1iGce3j-OtFj--N1Vzm3y0w&s",
    },
    {
      name: "Dr. Nitish Kumar",
      specialty: "Stroke, Epilepsy, Headache disorders, Movement disorders",
      hospital: "Nitish Neuro Center, Rajendra Nagar, Patna",
      phone: "Not specified",
      image:
        "https://assets.lybrate.com/img/documents/doctor/dp/e1b56b9171efa241cfbcc094e549f7ae/Neurology-NitishKumar-Patna-a5ff33",
    },
    {
      name: "Dr. Gunjan Kumar",
      specialty:
        "Pediatric neurology, Epilepsy, Cerebral palsy, Developmental disorders",
      hospital: "Ajay Bhawan, Chhoti Rukanpura, Patna",
      phone: "+91-612 2591125",
      image:
        "https://medanta.s3.ap-south-1.amazonaws.com/all-doctor-with-slug/dr-gunjan-kumar.png",
    },
    {
      name: "Dr. Hemant Kumar",
      specialty: "Stroke, Epilepsy, Headache disorders, Movement disorders",
      hospital: "Savitri Neuro Clinic, Rajendra Nagar, Patna",
      phone: "Not specified",
      image:
        "https://content3.jdmagicbox.com/comp/patna/dc/0612px612.x612.1237445661u7u5i8.dc/catalogue/dr-prof-hemant-kumar-superspeciality-kidney-clinic-sheikhpura-patna-nephrologists-rogkarjre9.jpg",
    },
  ],
  Odisha: [
    {
      name: "Dr. Smita Das",
      specialty: "Movement Disorder Specialist",
      hospital: "SUM Hospital, Bhubaneswar",
      phone: "(0674) 272-5353",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJFVjYBnyIM3ruo8LL2idPd3_825hQNezjg&s",
    },
    {
      name: "Dr. Bikash Kumar Mishra",
      specialty: "Neurological Disorders",
      hospital: "Apollo Hospitals, Bhubaneswar",
      phone: "Not specified",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHiPUhQQHtGeQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728611821424?e=2147483647&v=beta&t=ZtqCURnS8icYq2GMzUdOpzxgHRCsSa-a7rurBS43Gvc",
    },
    {
      name: "Dr. Antaryami Nanda",
      specialty: "Neurological Disorders",
      hospital: "Apollo Hospitals, Bhubaneswar",
      phone: "1860 500 1066",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQHWeotF_uMYTQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517381885594?e=2147483647&v=beta&t=-17TG3smCg5LWKPSkQz1ndVmbWvLoEjB41RjYpS6DfY",
    },
    {
      name: "Dr. Ashok Mallik",
      specialty: "Neurological Disorders",
      hospital: "SCB Medical College, Cuttack",
      phone: "+91 94372 20070",
      image: "https://scbmch.in/wp-content/uploads/2020/11/Ashok_mallick.png",
    },
    {
      name: "Dr. Pitamber Behuria",
      specialty: "Neurological Disorders",
      hospital: "Curewell Laboratory, Cuttack",
      phone: "+91 80180 57777",
      image:
        "https://content.jdmagicbox.com/comp/cuttack/l2/0671px671.x671.210503100729.u3l2/catalogue/dr-pitamber-behuria-asst-professor-neurology-cuttack-neurologists-0pcsvm62dw.jpg",
    },
  ],
  "Madhya Pradesh": [
    {
      name: "Dr. Alok Verma",
      specialty: "Neurologist",
      hospital: "Bombay Hospital, Indore",
      phone: "(0731) 253-3333",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTED8SxJlnQbx77m7wmTAV3_LkPIQWM-2vM9A&s",
    },
    {
      name: "Dr. Prateek Sharma",
      specialty: "Epilepsy, Stroke, Other neurological diseases",
      hospital: "Bansal Hospital, Bhopal",
      phone: "Not specified",
      image:
        "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2021/04/PSharma_HeadShot.png",
    },
    {
      name: "Dr. Vinod Rai",
      specialty: "Complex neurological disorders",
      hospital: "Choithram Hospital and Research Centre, Indore",
      phone: "+91 83193 82426",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_YyG8972j8-wKKiOGqYr8jKLXNWZXty6JHw&s",
    },
    {
      name: "Dr. Anupam Sahni",
      specialty: "Neurological disorders",
      hospital: "Best Superspeciality Hospital, Jabalpur",
      phone: "+91 79997 02984",
      image:
        "https://images.jdmagicbox.com/comp/jabalpur/d1/9999px761.x761.130117175620.s5d1/catalogue/dr-anupam-sahni-napier-town-jabalpur-jabalpur-neurologists-9mpe6.jpg",
    },
    {
      name: "Dr. Jaydeep Kumar Sharma",
      specialty:
        "Stroke, Epilepsy, Headache, Parkinson's disease, Neuropathy, Dementia, Muscle & Nerve Disease, Spinal Cord Injuries Treatment, Paraparesis, Brain Injury, Athetosis",
      hospital: "Brainwell Neurospine Center, Gwalior",
      phone: "Not specified",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3TdyEtkCXwcfddC5mrFeN9mUmPhof_rnCg&s",
    },
  ],
  Jharkhand: [
    {
      name: "Dr. Neha Tirkey",
      specialty: "Parkinson's Specialist",
      hospital: "RIMS, Ranchi",
      phone: "(0651) 254-0000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeTZ7e69fnnGhSpetJ5rB4ljLON_rp29LFQ&sg",
    },
    {
      name: "Dr. Prasen Ranjan",
      specialty:
        "General Neurology, Neurophysiology, Cerebral Palsy, Brain Injury, Post-Stroke, Ataxia, Spinal Cord Injury Treatment",
      hospital: "Neuro Clinic & Research Center, Ranchi",
      phone: "+91-92047-96515",
      image:
        "https://images.jdmagicbox.com/comp/ranchi/d6/0651px651.x651.140427101117.z3d6/catalogue/dr-prasen-ranjan-radium-road-ranchi-neurologists-22aktb7.jpg",
    },
    {
      name: "Dr. Prakash Chandra",
      specialty: "Neurology, Brain and Nerve Diagnostics",
      hospital: "Santevita Hospital, Ranchi",
      phone: "+91-89875-69820",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5f-AWZVFHsZ99M7yBOXA1UWELqizcauaPw&s",
    },
    {
      name: "Dr. Sanjay Kumar",
      specialty: "Neurology",
      hospital: "Dr. Sanjay Kumar Clinic, Ranchi",
      phone: "+91-62029-29631",
      image:
        "https://images.jdmagicbox.com/comp/kolkata/w1/033pxx33.xx33.190415165226.c4w1/catalogue/dr-sanjay-kumar-new-town-kolkata-orthopaedic-doctors-1zbdpbiyqb.jpg",
    },
    {
      name: "Dr. Tarun Kumar Adukia",
      specialty: "Neurology",
      hospital: "Tarun Adukia Clinic, Ranchi",
      phone: "+91-89875-69820",
      image: "https://app.mdoc.in/appv2_0_1/assets/images/doctors_dp_278.jpg",
    },
  ],
  Assam: [
    {
      name: "Dr. Vikram Baruah",
      specialty: "Neurologist",
      hospital: "GNRC Hospitals, Guwahati",
      phone: "(0361) 710-1000",
      image:
        "https://imagesx.practo.com/providers/dr-vikram-barua-kaushik-urologist-gurgaon-5b7675c4-8d7e-4428-ae81-8f38e0552410.jpg?i_type=t_100x100-4x",
    },
    {
      name: "Dr. Rupjyoti Das",
      specialty:
        "Stroke, Epilepsy, Headache disorders, Movement disorders, Neuromuscular diseases",
      hospital: "GNRC Hospitals, Dispur, Guwahati",
      phone: "1800-345-0022",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzK3VfU39aMjZ9O6_YXk3WaKnRn5YLaVf6A&s",
    },
    {
      name: "Dr. Nabajyoti Barkataky",
      specialty: "General neurology, Stroke, Epilepsy, Headache disorders",
      hospital: "Marwari Hospitals, Guwahati",
      phone: "+91 7099066004",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQEJWLaCrxyL7g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1589002028892?e=2147483647&v=beta&t=SE0UacK36Rvgg8GRiJW32fDjZG4JexIGVcDMH_cHchs",
    },
    {
      name: "Dr. Naba J Borah",
      specialty: "General neurology, Stroke, Epilepsy, Neuromuscular disorders",
      hospital: "GNRC Hospital, Guwahati",
      phone: "+91 9864516798",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BZVz-n9--ovheHyf9ti2lhUR1nBFGJwi_w&s",
    },
    {
      name: "Dr. Rupam Hazarika",
      specialty: "General neurology, Stroke, Epilepsy, Movement disorders",
      hospital: "MSK Clinic, Dibrugarh",
      phone: "+91 86387 95017",
      image:
        "https://content.jdmagicbox.com/comp/dibrugarh/u9/9999px373.x373.230821082657.y7u9/catalogue/dr-rupam-hazarika-neurologist-graham-bazar-dibrugarh-neurofunctional-surgeons-tmri41nc1g.jpg",
    },
  ],
  Chhattisgarh: [
    {
      name: "Dr. Sunil Nair",
      specialty: "Movement Disorder Specialist",
      hospital: "Auro Hospitals, Raipur",
      phone: "(0771) 400-4444",
      image:
        "https://alittihadpolyclinic.com/thumb.php?img=uploads/78008181588149917.jpg&w=300&h=350",
    },
    {
      name: "Dr. Nachiket Dixit",
      specialty: "Headache, Seizures, Parkinson's Disease",
      hospital: "Nachiket Dixit Neuro Clinic, Bhilai",
      phone: "+91 7884050702",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmraMEvdTXU4_ADfiNn_TqO0uR1kMnGaAGQ&s",
    },
    {
      name: "Dr. Rahul Pathak",
      specialty: "Movement Disorders, Botox Therapy, Neurointervention",
      hospital: "Ramkrishna CARE Hospitals, Raipur",
      phone: "+91-40-68106529",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgrGBu4C93tbDwnLbPy2avgxrEfLon5x12A&s",
    },
    {
      name: "Dr. Ritesh Sahu",
      specialty: "Epilepsy, Movement Disorders, Stroke",
      hospital: "Neuro Care Centre, Raipur",
      phone: "+91 62618 73717",
      image: "https://drriteshsahu.com/assets/img/ritesh-sahu.jpg",
    },
    {
      name: "Dr. Ashish Aujla",
      specialty: "Paediatric Neurology, Epilepsy, Developmental Disorders",
      hospital: "Kidscare Paediatric Neurology Centre, Raipur",
      phone: "+91 8349154500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWarL8Q4ujjdUPwWeiAJSznyDqw6_Gz2nktg&s",
    },
  ],
  Uttarakhand: [
    {
      name: "Dr. Meena Rawat",
      specialty: "Neurologist",
      hospital: "Himalayan Institute, Dehradun",
      phone: "(0135) 247-1000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMHbD0BdcPI76nY5dsTwRdP5EzweBe-6NHA&s",
    },
    {
      name: "Dr. Rohitash Sharma",
      specialty: "Neurological disorders",
      hospital: "Dr. Rohitash Sharma Neurologist Dehradun",
      phone: "+91-9997240908",
      image:
        "https://www.sgrrmc.com/upload/faculty/133659297709416566_Dr%20rohitash%20Sharma.jpg",
    },
    {
      name: "Dr. Nitin Garg",
      specialty: "Neurophysiology, Botox Facility",
      hospital: "Max Super Speciality Hospital, Dehradun",
      phone: "+91-8218441616",
      image:
        "https://imagesx.practo.com/providers/dr-nitin-garg-neurosurgeon-bhopal-3c76e741-fa9a-4812-9097-da6ea81b65ce.jpg?i_type=t_100x100-4x",
    },
    {
      name: "Dr. Laxmikant Joshi",
      specialty: "Neurological disorders",
      hospital: "Kailash Neuro Center, Haldwani",
      phone: "Not Specified",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7KbMYYaT7SyxR2rSP96r05costieRLYz2g&s",
    },
    {
      name: "Dr. Sanjeev Jetli",
      specialty: "Neurological disorders",
      hospital: "Neurology Clinic, Haldwani",
      phone: "+91-8173922245",
      image:
        "https://gsvmmedicalcollege.com/wp-content/uploads/2023/09/Dr.-snjeev-jetli.jpeg",
    },
  ],

  // Default doctors (shown when place isn't found)
  default: [
    {
      name: "Dr. Subhash Banerjee",
      specialty: "Neurologist",
      hospital: "AMRI Hospitals, Kolkata",
      phone: "(033) 6680-0000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnW9erI-Fqhq0gt20UHl6tz4eDUb282NQWzw&s",
    },
    {
      name: "Dr. Sitansu Sekhar Nandi",
      specialty: "Neurologist",
      hospital: "The Calcutta Medical Research Institute, Kolkata",
      phone: "+91 98310 00223",
      image:
        "https://ckbirlahospitals.com/cmri/uploadedfiles/gallery/1628937197_Sitansu-Sekhar-Nandi.jpg",
    },
    {
      name: "Dr. Arabinda Mukhopadhyay",
      specialty: "Neurological disorders",
      hospital: "The Calcutta Medical Research Institute, Kolkata",
      phone: "Not specified",
      image:
        "https://imagesx.practo.com/providers/dr-arabinda-mukhopadhyay-neurologist-kolkata-0a6a232d-cdb8-4ec4-8107-22633dd81596.jpg?i_type=t_70x70-2x-webp",
    },
    {
      name: "Dr. Prosenjit Chakraborty",
      specialty: "Neurological disorders",
      hospital: "Fortis Hospital - Anandapur, Kolkata",
      phone: "Not specified",
      image:
        "https://imagesx.practo.com/providers/dr-prosenjit-chakraborty-neurologist-kolkata-5551597e-bcae-48d7-b919-0716b1a284a7.jpg?i_type=t_70x70-2x-webp",
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  // Initialize form steps
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");

  // Show first step by default
  showStep(1);

  // Next step buttons
  document.querySelectorAll(".next-step").forEach((button) => {
    button.addEventListener("click", function () {
      const currentStep = document.querySelector(".form-step.active");
      const currentStepNumber = parseInt(currentStep.dataset.step);

      // Validate current step before proceeding
      if (validateStep(currentStepNumber)) {
        showStep(currentStepNumber + 1);
        updateProgressSteps(currentStepNumber + 1);

        // 👇 Smooth scroll to the next step
        const nextStep = document.querySelector(
          `.form-step[data-step="${currentStepNumber + 1}"]`
        );

        if (nextStep) {
          nextStep.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Previous step buttons
  document.querySelectorAll(".prev-step").forEach((button) => {
    button.addEventListener("click", function () {
      const currentStep = document.querySelector(".form-step.active");
      const currentStepNumber = parseInt(currentStep.dataset.step);

      showStep(currentStepNumber - 1);
      updateProgressSteps(currentStepNumber - 1);
    });
  });

  // Form submission
  document
    .getElementById("parkinsonForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      // Show loading indicator
      document.getElementById("loadingIndicator").style.display = "block";
      document.querySelector(
        '#parkinsonForm button[type="submit"]'
      ).disabled = true;

      // Simulate progress (in a real app, this would be based on actual progress)
      simulateProgress();

      try {
        // Get all form values
        const formData = {
          mdvp_fo: document.getElementById("mdvp_fo").value,
          mdvp_fhi: document.getElementById("mdvp_fhi").value,
          mdvp_flo: document.getElementById("mdvp_flo").value,
          jitter: document.getElementById("jitter").value,
          jitter_abs: document.getElementById("jitter_abs").value,
          jitter_rap: document.getElementById("jitter_rap").value,
          jitter_ppq5: document.getElementById("jitter_ppq5").value,
          jitter_ddp: document.getElementById("jitter_ddp").value,
          shimmer: document.getElementById("shimmer").value,
          shimmer_db: document.getElementById("shimmer_db").value,
          shimmer_apq3: document.getElementById("shimmer_apq3").value,
          shimmer_apq5: document.getElementById("shimmer_apq5").value,
          shimmer_apq11: document.getElementById("shimmer_apq11").value,
          shimmer_dda: document.getElementById("shimmer_dda").value,
          nhr: document.getElementById("nhr").value,
          hnr: document.getElementById("hnr").value,
          rpde: document.getElementById("rpde").value,
          dfa: document.getElementById("dfa").value,
          spread1: document.getElementById("spread1").value,
          spread2: document.getElementById("spread2").value,
          d2: document.getElementById("d2").value,
          ppe: document.getElementById("ppe").value,
        };

        // Send data to Flask backend
        const response = await fetch("/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        });

        const result = await response.json();

        if (result.status === "error") {
          throw new Error(result.error);
        }

        // Display the voice parameter values in analytics
        document.getElementById("jitterValue").textContent =
          parseFloat(formData.jitter).toFixed(3) + "%";
        document.getElementById("shimmerValue").textContent =
          parseFloat(formData.shimmer).toFixed(3) + "dB";
        document.getElementById("hnrValue").textContent = parseFloat(
          formData.hnr
        ).toFixed(3);

        // Display results using the actual prediction from Flask
        displayResults(result.prediction, result.risk_score, formData);

        // Show analytics
        document.getElementById("analyticsContainer").style.display = "block";
      } catch (error) {
        console.error("Error:", error);
        document.getElementById("resultContainer").style.display = "block";
        document.getElementById("resultContainer").className =
          "result-container";
        document.getElementById("resultTitle").textContent = "Error";
        document.getElementById("resultTitle").style.color = "var(--danger)";
        document.getElementById("resultDescription").textContent =
          "Failed to get prediction. Please try again. Error: " + error.message;
      } finally {
        // Hide loading indicator
        document.getElementById("loadingIndicator").style.display = "none";
        document.querySelector(
          '#parkinsonForm button[type="submit"]'
        ).disabled = false;
      }
    });
  document
    .getElementById("viewDoctorsBtn")
    .addEventListener("click", function () {
      const place = document.getElementById("place").value.trim();
      const placeKey = place.split(",")[0]; // Take only the city part if there's a comma
      document.getElementById("placeDisplay").textContent = placeKey;

      // Get doctors for this place or default if not found
      const doctors = doctorsDatabase[placeKey] || doctorsDatabase["default"];

      // Clear previous doctors
      document.getElementById("doctorsContainer").innerHTML = "";

      if (doctors.length === 0) {
        // No doctors found for this place
        document.getElementById("doctorsContainer").innerHTML = `
            <div class="no-doctors">
                <i class="fas fa-user-md" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <p>No specialists found in your area. Showing national specialists instead.</p>
            </div>
        `;
      } else {
        // Add doctors to the list
        doctors.forEach((doctor) => {
          const doctorCard = document.createElement("div");
          doctorCard.className = "doctor-card";
          doctorCard.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image">
                <div class="doctor-info">
                    <h4 class="doctor-name">${doctor.name}</h4>
                    <p class="doctor-specialty">${doctor.specialty}</p>
                    <p class="doctor-specialty">${doctor.hospital}</p>
                    <p class="doctor-contact">
                        <i class="fas fa-phone-alt"></i> ${doctor.phone}
                    </p>
                </div>
            `;
          document.getElementById("doctorsContainer").appendChild(doctorCard);
        });

        // Create and add reload button
        const reloadButton = document.createElement("button");
        reloadButton.className = "btn btn-primary";
        reloadButton.innerHTML = '<i class="fas fa-sync-alt"></i> New Patient';
        reloadButton.style.marginTop = "20px";
        reloadButton.addEventListener("click", function () {
          location.reload();
        });

        // Add the button after the doctors container
        document.getElementById("doctorsContainer").appendChild(reloadButton);

        // Show doctors list
        document.getElementById("doctorsList").style.display = "block";

        // Scroll to doctors list
        document
          .getElementById("doctorsList")
          .scrollIntoView({ behavior: "smooth" });
      }

      // Show doctors list
      document.getElementById("doctorsList").style.display = "block";

      // Scroll to doctors list
      document
        .getElementById("doctorsList")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Input validation on blur
  document.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("blur", function () {
      validateInput(this);
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Show specific form step
  function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll(".form-step").forEach((step) => {
      step.classList.remove("active");
    });

    // Show current step
    document
      .querySelector(`.form-step[data-step="${stepNumber}"]`)
      .classList.add("active");

    // Update review section if we're on the review step
    if (stepNumber === 4) {
      updateReviewSection();
    }
  }

  // Update progress steps
  function updateProgressSteps(currentStep) {
    document.querySelectorAll(".progress-step").forEach((step) => {
      const stepNumber = parseInt(step.dataset.step);

      step.classList.remove("active", "completed");

      if (stepNumber < currentStep) {
        step.classList.add("completed");
      } else if (stepNumber === currentStep) {
        step.classList.add("active");
      }
    });
  }

  // Validate form step
  function validateStep(stepNumber) {
    let isValid = true;
    const step = document.querySelector(
      `.form-step[data-step="${stepNumber}"]`
    );

    // Validate all required inputs in this step
    step
      .querySelectorAll("input[required], select[required]")
      .forEach((input) => {
        if (!validateInput(input)) {
          isValid = false;
        }
      });

    return isValid;
  }

  // Validate individual input
  function validateInput(input) {
    const formGroup = input.closest(".form-group");

    // Reset validation state
    formGroup.classList.remove("valid", "invalid");

    // Check if input is valid
    if (input.checkValidity()) {
      formGroup.classList.add("valid");
      return true;
    } else {
      formGroup.classList.add("invalid");
      return false;
    }
  }

  // Update review section with form data
  function updateReviewSection() {
    document.getElementById("review-name").textContent =
      document.getElementById("unitName").value;
    document.getElementById("review-age").textContent =
      document.getElementById("age").value;
    document.getElementById("review-gender").textContent =
      document.getElementById("gender").value;
    document.getElementById("review-place").textContent =
      document.getElementById("place").value;

    document.getElementById("review-mdvp_fo").textContent =
      document.getElementById("mdvp_fo").value;
    document.getElementById("review-mdvp_fhi").textContent =
      document.getElementById("mdvp_fhi").value;
    document.getElementById("review-mdvp_flo").textContent =
      document.getElementById("mdvp_flo").value;
    document.getElementById("review-jitter").textContent =
      document.getElementById("jitter").value + "%";
    document.getElementById("review-jitter_abs").textContent =
      document.getElementById("jitter_abs").value;
    document.getElementById("review-jitter_rap").textContent =
      document.getElementById("jitter_rap").value;
    document.getElementById("review-jitter_ppq5").textContent =
      document.getElementById("jitter_ppq5").value;
    document.getElementById("review-jitter_ddp").textContent =
      document.getElementById("jitter_ddp").value;
    document.getElementById("review-shimmer").textContent =
      document.getElementById("shimmer").value + "dB";
    document.getElementById("review-shimmer_db").textContent =
      document.getElementById("shimmer_db").value + "dB";
    document.getElementById("review-shimmer_apq3").textContent =
      document.getElementById("shimmer_apq3").value;
    document.getElementById("review-shimmer_apq5").textContent =
      document.getElementById("shimmer_apq5").value;
    document.getElementById("review-shimmer_apq11").textContent =
      document.getElementById("shimmer_apq11").value;
    document.getElementById("review-shimmer_dda").textContent =
      document.getElementById("shimmer_dda").value;
    document.getElementById("review-nhr").textContent =
      document.getElementById("nhr").value;
    document.getElementById("review-hnr").textContent =
      document.getElementById("hnr").value;
    document.getElementById("review-rpde").textContent =
      document.getElementById("rpde").value;
    document.getElementById("review-dfa").textContent =
      document.getElementById("dfa").value;
    document.getElementById("review-spread1").textContent =
      document.getElementById("spread1").value;
    document.getElementById("review-spread2").textContent =
      document.getElementById("spread2").value;
    document.getElementById("review-d2").textContent =
      document.getElementById("d2").value;
    document.getElementById("review-ppe").textContent =
      document.getElementById("ppe").value;
  }

  // Display prediction results
  function displayResults(prediction, riskScore, formData) {
    const resultContainer = document.getElementById("resultContainer");
    const resultTitle = document.getElementById("resultTitle");
    const resultDescription = document.getElementById("resultDescription");
    const recommendations = document.getElementById("recommendations");
    const riskLevel = document.getElementById("riskLevel");
    const riskMarker = document.getElementById("riskMarker");

    // Update risk meter
    riskLevel.style.width = riskScore + "%";
    riskMarker.style.left = riskScore + "%";

    // Update risk score display
    document.getElementById("riskScore").textContent = riskScore + "%";

    if (prediction === 1) {
      // High risk
      resultContainer.className = "result-container result-positive";
      resultTitle.textContent = "Higher Risk Detected";
      resultTitle.style.color = "var(--danger)";
      resultDescription.textContent = `Based on your voice analysis parameters, our algorithm has detected an elevated risk of Parkinson's disease (${riskScore}% risk score). We recommend consulting with a neurologist for further evaluation. Early detection and intervention can significantly improve outcomes.`;

      recommendations.innerHTML = `
                <h4 style="margin-bottom: 0.5rem;">Recommended Next Steps:</h4>
                <ul style="text-align: left; margin-left: 2rem;">
                    <li>Schedule an appointment with a neurologist</li>
                    <li>Consider a follow-up voice analysis in 3-6 months</li>
                    <li>Monitor for symptoms like tremors, stiffness, or balance issues</li>
                    <li>Maintain a healthy lifestyle with regular exercise</li>
                </ul>
            `;

      // Show consultant option
      document.getElementById("consultantOption").style.display = "block";
    } else {
      // Low risk
      resultContainer.className = "result-container result-negative";
      resultTitle.textContent = "Lower Risk Detected";
      resultTitle.style.color = "var(--success)";
      resultDescription.textContent = `Based on your voice analysis parameters, our algorithm has not detected significant indicators of Parkinson's disease at this time (${riskScore}% risk score). However, if you experience any symptoms, we recommend consulting with a healthcare professional.`;

      recommendations.innerHTML = `
                <h4 style="margin-bottom: 0.5rem;">Preventive Recommendations:</h4>
                <ul style="text-align: left; margin-left: 2rem;">
                    <li>Continue monitoring your voice characteristics periodically</li>
                    <li>Maintain regular physical activity</li>
                    <li>Consider annual check-ups if you have family history</li>
                    <li>Be aware of potential symptoms</li>
                </ul>
            `;

      // Hide consultant option
      document.getElementById("consultantOption").style.display = "none";
    }

    // Show result
    resultContainer.style.display = "block";

    // Scroll to results
    resultContainer.scrollIntoView({ behavior: "smooth" });
  }

  // Simulate progress for loading indicator
  function simulateProgress() {
    const progressText = document.getElementById("progressText");
    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }

      progressText.textContent = `Processing data (${Math.min(
        100,
        Math.round(progress)
      )}%)`;
    }, 300);
  }
});

// Navbar Js
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle nav menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu on nav link click (mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
