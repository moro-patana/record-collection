// An array stores all of the record
const record = [
    {
      id: 1,
      title:"The Most Relevant",
      artist:"Ben",
      url: "http://relevant.com",
      tracks: ["1888", "You are so creative"],
    },
    {
      id: 2,
      title:"Famous art",
      artist:"Ben",
      url: "http://creativity.com",
      tracks: ["1734", "King's art"],
    },

    {
      id: 3,
      title:"Horse",
      artist:"Tom",
      url: "http://art.com",
      tracks: ["1756", "Interesting art"]
    }
];

// Show all the list inside the array

let recordList = () => {
    for (let i= 0; i < record.length; i++) {
        let recordString = `Title : ${record[i].title} 
Artist : ${record[i].artist} 
url : ${record[i].url} 
tracks : ${record[i].tracks}`;
alert(recordString);
    }
};

// Add new record

const addNewRecord = () => {
    let newRecordTitle = prompt("Add a new title");
    let newRecordArtist = prompt("Add the artist's name");
    let newRecordUrl = prompt("Enter your url");
    let newRecordTracks = prompt("Add the tracks");

// Condition if the user enter url which does not starts with http

if (!newRecordUrl.startsWith (`http://`)) {
    newRecordUrl = `http://${newRecordUrl}`;
}

// Push the new record into the record array

let newRecord = {
    title: newRecordTitle,
    artist: newRecordArtist,
    url: newRecordUrl,
    tracks: newRecordTracks,
}
record.push(newRecord);
return;
};

// Update the record which already exists

/*const updateRecord = () => {
    let updatedRecordTitle = prompt("Do you want to update the tittle?");
    let updatedRecordArtist = prompt("Do you want to update the artist's name");
    let updatedRecordUrl = prompt("Do you want to update the the url");
    let updatedRecordTracks = prompt("Do you want to update the tracks");

    let updatedRecord = {
        title: updatedRecordTitle,
        artist: updatedRecordArtist,
        url: updatedRecordUrl,
        tracks: updatedRecordTracks,
    }
    record.push(updatedRecord);
};*/

// All of the options

const menuList = `Options: 
Choose (1) to show all list.
Choose (2) to create new records.
Choose (3) to update record.
Choose (4) to remove record.
Choose (0) to quit.`;
let menuOption = Number(prompt(menuList));

// Use loop to return into the menuList

while (menuOption !== 0) {
switch (menuOption) {
    case 1:
        recordList();
        break;
    case 2:
        addNewRecord();
        break;
    case 3:
        let indexToUpdate = Number(prompt(`Which record do you want to update? Choose the index number.`))
        let updatedId = prompt("Update the id")
        let updatedTitle = prompt("Do you want to update the tittle?");
        let updatedArtist = prompt("Do you want to update the artist's name");
        let updatedUrl = prompt("Do you want to update the the url");
        let updatedTracks = prompt("Do you want to update the tracks");
    
        let id = newItem.id;
        let updatedRecord = record.findIndex(item => item.id === id);
        record.splice(indexToUpdate, 1, newItem);
        console.log(updatedRecord);
        let newItem = {
            id: updatedId,
            title: updatedTitle,
            artist: updatedArtist,
            url: updatedUrl,
            tracks: updatedTracks
        }
        record.push(newItem);
console.log(record);
        break;
// Remove record

    case 4:
        let indexToRemove = Number(prompt(`Which record do you want to delete? (Enter the index's number)`));
        let removedRecord = record.splice(indexToRemove--, 1);
        console.log(removedRecord);
        alert(`You deleted ${removedRecord[0].title}`);
            break;
    default:
        `We can choose from the option`

}
    menuOption = Number(prompt(menuList));
};

// The end of the of the program
alert(`That is the end of the program`);