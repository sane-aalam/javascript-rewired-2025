// Convert object to array for map/filter/reduce
function processDevProfiles(profiles, newDev, newDevKey) {

  let profilesArray = Object.entries(profiles).map(([key, value]) => ({
    key,
    ...value,
  }));

  // filter which have 4 experienceYears
  profilesArray = profilesArray.filter((dev) => dev.experienceYears >= 4);

  profilesArray = profilesArray.filter((dev) => dev.key !== "dev3");

  profilesArray.push({ key: newDevKey, ...newDev });

  const summaries = profilesArray.map((dev) => ({
    id: dev.id,
    name: dev.name,
    skillCount: dev.skills.length,
  }));

  const totalRate = profilesArray.reduce((acc, dev) => 
           acc + dev.hourlyRate, 0);

  const updatedProfiles = Object.fromEntries(
    profilesArray.map((dev) => [
      dev.key,
      {
        id: dev.id,
        name: dev.name,
        skills: dev.skills,
        experienceYears: dev.experienceYears,
        hourlyRate: dev.hourlyRate,
      },
    ])
  );

  return { updatedProfiles, summaries, totalRate };
}

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

const newDev = {
  id: 4,
  name: "Diana Lee",
  skills: ["React", "TypeScript"],
  experienceYears: 4,
  hourlyRate: 60,
};
console.log("Before processing:", devProfiles);
const result = processDevProfiles(devProfiles, newDev, "dev4");
console.log("Updated Profiles:", result.updatedProfiles);
console.log("Summaries:", result.summaries);
console.log("Total Hourly Rate:", result.totalRate);
