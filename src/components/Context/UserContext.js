import React, { useState } from "react";

export const UseContext = React.createContext();

function UserContext({ children }) {
  const [profileImage, setImage] = useState("mark");
  let [currentImage, setCurrent] = useState();
  let [mentor1] = useState([
    {
      title: "My Courses",
      value: "6",
      color: "primary",
      icon: "fa-briefcase",
      isProgress: false
    },
    {
      title: "My Students",
      value: "5",
      color: "success",
      icon: "fa-user-tie",
      isProgress: false
    },
    {
      title: "Tasks",
      value: "63%",
      color: "info",
      icon: "fa-clipboard-list",
      isProgress: true
    },
    {
      title: "Pending Tasks",
      value: "16",
      color: "warning",
      icon: "fa-list-check",
      isProgress: false
    }
  ]);
  let [mentor2] = useState([
    {
      title: "My Courses",
      value: "4",
      color: "primary",
      icon: "fa-briefcase",
      isProgress: false
    },
    {
      title: "My Students",
      value: "4",
      color: "success",
      icon: "fa-user-tie",
      isProgress: false
    },
    {
      title: "Tasks",
      value: "85%",
      color: "info",
      icon: "fa-clipboard-list",
      isProgress: true
    },
    {
      title: "Pending Tasks",
      value: "25",
      color: "warning",
      icon: "fa-list-check",
      isProgress: false
    }
  ]);
  let [mentor3] = useState([
    {
      title: "My Courses",
      value: "8",
      color: "primary",
      icon: "fa-briefcase",
      isProgress: false
    },
    {
      title: "My Students",
      value: "10",
      color: "success",
      icon: "fa-user-tie",
      isProgress: false
    },
    {
      title: "Tasks",
      value: "75%",
      color: "info",
      icon: "fa-clipboard-list",
      isProgress: true
    },
    {
      title: "Pending Tasks",
      value: "30",
      color: "warning",
      icon: "fa-list-check",
      isProgress: false
    }
  ]);
  let [mentor4] = useState([
    {
      title: "My Courses",
      value: "3",
      color: "primary",
      icon: "fa-briefcase",
      isProgress: false
    },
    {
      title: "My Students",
      value: "6",
      color: "success",
      icon: "fa-user-tie",
      isProgress: false
    },
    {
      title: "Tasks",
      value: "90%",
      color: "info",
      icon: "fa-clipboard-list",
      isProgress: true
    },
    {
      title: "Pending Tasks",
      value: "10",
      color: "warning",
      icon: "fa-list-check",
      isProgress: false
    }
  ]);

  const [students, setStudents] = useState([
    {
      studentName: "Erma Hoeger",
      grade: "IX",
      gender: "Female",
      address: "Fort Stefanie",
      mentor: "Mark",
      id: 1
    },
    {
      studentName: "Josh Ritchie",
      grade: "XII",
      gender: "Male",
      address: "Port Jaysoncester",
      mentor: "Zyan Cliph",
      id: 2
    },
    {
      studentName: "Morris Will",
      grade: "X",
      gender: "Male",
      address: "San Angelo",
      mentor: "Mark",
      id: 3
    },
    {
      studentName: "Luke Franecki",
      grade: "XI",
      address: "Urbandale",
      gender: "Male",
      mentor: "Mark",
      id: 4
    },
    {
      studentName: "Lynn Rodriguez",
      grade: "XI",
      address: "Jadonmouth",
      gender: "Female",
      mentor: "Drake Blue",
      id: 5
    },
    {
      studentName: "Mrs. Frankie Flatley",
      grade: "X",
      address: "Boyerstad",
      gender: "Male",
      mentor: "Zyan Cliph",
      id: 6
    },
    {
      studentName: "Robyn Stoltenberg Jr.",
      grade: "XII",
      address: "Lake Alta",
      gender: "Male",
      mentor: "Mark",
      id: 7
    },
    {
      studentName: "Frank Hickle",
      grade: "IX",
      address: "Killeen",
      gender: "Male",
      mentor: "Zyan Cliph",
      id: 8
    },
    {
      studentName: "Jesus Dare",
      grade: "XI",
      address: "Donnellyberg",
      gender: "Male",
      mentor: "Cilian Murphy",
      id: 9
    },
    {
      studentName: "Otis Brown",
      grade: "X",
      gender: "Male",
      address: "North Geraldview",
      mentor: "Drake Blue",
      id: 10
    },
    {
      studentName: "Teresa Hermann",
      grade: "XII",
      gender: "Female",
      address: "West Jerrell",
      mentor: "Cilian Murphy",
      id: 11
    },
    {
      studentName: "Martha Wilderman III",
      grade: "XII",
      address: "Wizastead",
      gender: "Male",
      mentor: "Drake Blue",
      id: 12
    },
    {
      studentName: "Roosevelt Mitchell",
      grade: "IX",
      address: "Castle Rock",
      gender: "Male",
      mentor: "Drake Blue",
      id: 13
    },
    {
      studentName: "Celia Mante",
      grade: "XI",
      address: "Griffinborough",
      gender: "Female",
      mentor: "Cilian Murphy",
      id: 14
    },
    {
      studentName: "Nathan Wilkinson PhD",
      grade: "XI",
      address: "Littleton",
      gender: "Male",
      mentor: "Drake Blue",
      id: 15
    },
    {
      studentName: "Miss Jean Haag III",
      grade: "XII",
      address: "North Yoshikoport",
      gender: "Female",
      mentor: "Cilian Murphy",
      id: 16
    },
    {
      studentName: "Kimberly Hoeger III",
      grade: "IX",
      address: "Margeworth",
      gender: "Male",
      mentor: "Cilian Murphy",
      id: 17
    },
    {
      studentName: "Darrell Rodriguez",
      grade: "X",
      address: "Sunrise",
      gender: "Male",
      mentor: "Zyan Cliph",
      id: 18
    },
    {
      studentName: "Doreen Gutmann",
      grade: "IX",
      address: "University",
      gender: "Female",
      mentor: "Drake Blue",
      id: 19
    },
    {
      studentName: "Roger Monahan",
      grade: "X",
      address: "Ottisbury",
      gender: "Male",
      mentor: "Not Assigned",
      id: 20
    },
    {
      studentName: "Kristi Ledner",
      grade: "XI",
      address: "Fort Christelle",
      gender: "Male",
      mentor: "Not Assigned",
      id: 21
    },
    {
      studentName: "Constance Larson",
      grade: "XII",
      address: "Murfreesboro",
      gender: "Female",
      mentor: "Cilian Murphy",
      id: 22
    },
    {
      studentName: "Norma Hudson",
      grade: "XII",
      address: "West Elnaside",
      gender: "Female",
      mentor: "Cilian Murphy",
      id: 23
    },
    {
      studentName: "Christine Brown",
      grade: "X",
      address: "Fort Lysanne",
      gender: "Female",
      mentor: "Not Assigned",
      id: 24
    },
    {
      studentName: "Miss Ora Hoeger",
      grade: "XI",
      address: "Willchester",
      gender: "Female",
      mentor: "Cilian Murphy",
      id: 25
    },
    {
      studentName: "Shelley Stroman",
      grade: 12,
      address: "Port Oral",
      gender: "Female",
      mentor: "Not Assigned",
      id: 26
    },
    {
      studentName: "April Balistreri",
      grade: "XI",
      address: "Vincechester",
      gender: "Female",
      mentor: "Mark",
      id: 27
    },
    {
      studentName: "Santiago Greenholt",
      grade: "X",
      address: "South Salmaton",
      gender: "Male",
      mentor: "Not Assigned",
      id: 28
    },
    {
      studentName: "Suzanne Marvin V",
      grade: "IX",
      address: "Keeblerworth",
      gender: "Female",
      mentor: "Cilian Murphy",
      id: 29
    },
    {
      studentName: "Edgar Lowe",
      grade: "XI",
      address: "East Namefurt",
      gender: "Male",
      mentor: "Cilian Murphy",
      id: 30
    }
  ]);

  return (
    <>
      <UseContext.Provider
        value={{
          currentImage,
          setCurrent,
          profileImage,
          setImage,
          mentor1,
          mentor2,
          mentor3,
          mentor4,
          students,
          setStudents
        }}
      >
        {children}
      </UseContext.Provider>
    </>
  );
}

export default UserContext;
