let devProfiles = {
  dev1: {
    id: 1,
    name: "Alice Smith",
    skills: ["JavaScript", "React"],
    experienceYears: 5,
    hourlyRate: 50,
  },
  dev2: {
    id: 2,
    name: "Bob Johnson",
    skills: ["Python", "Django"],
    experienceYears: 3,
    hourlyRate: 40,
  },
  dev3: {
    id: 3,
    name: "Charlie Brown",
    skills: ["JavaScript", "Vue"],
    experienceYears: 7,
    hourlyRate: 70,
  },
};

function removedDeveloper(profileObj, devKey) {
  if (profileObj[devKey]) {
    delete profileObj[devKey];
    return true;
  } else {
    return false;
  }
}

// console.log("Before deletion:", devProfiles);
removedDeveloper(devProfiles, "dev2");
// console.log(" ");
// console.log("After deleting dev2:", devProfiles);

function insertedDeveloper(profileObj, key, newDev) {
  profileObj[key] = newDev;
}

// insert
const newdeveloperdata = {
  id: 61,
  name: "Charlie Brown",
  skills: ["JavaScript", "Vue"],
  experienceYears: 7,
  hourlyRate: 70,
};

// insertedDeveloper(devProfiles, "dev5", newdeveloperdata);
// insertedDeveloper(devProfiles, "dev6", newdeveloperdata);
// insertedDeveloper(devProfiles, "dev7", newdeveloperdata);
// insertedDeveloper(devProfiles, "dev8", newdeveloperdata);
// insertedDeveloper(devProfiles, "dev9", newdeveloperdata);

// repeat work reduce by loop
for (let index = 5; index <= 15; index++) {
  insertedDeveloper(devProfiles, `dev${index}`, newdeveloperdata);
}

console.log("After deleting dev2:", devProfiles);
