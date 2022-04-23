// let vagetable = ['Potato', 'Ladies Finger', 'Carrot', 'Spinach', 'Creeper', 'Bitter-melon'];
// let district = new Array('Pabna', 'Nator', 'Rajshahi', 'Sirajganj');

// vagetable.forEach( (index, item) => {
//     if(item == 5){
//         console.log(index);
//     }
// })


/* showing array with for loop*/
// for( i = 0; i < vagetable.length; i = i+1){
//     console.log(vagetable[i]);
// }

/* concating more arrays by two methods */
// let allArray = vagetable.concat(district);
// let Arrays = [...vagetable, ...district, ...allArray];

// console.log(allArray.join(' '));
// console.log(Arrays.join());


/* Push, Pop, Shift, Unshift */
// vagetable.pop();
// console.log(vagetable);


/* slicing array */
// let vagetable2 = vagetable.slice(2, 6);
// console.log(vagetable);
// console.log(vagetable2);


/* for submitting as assignment*/
const studentName = ['Rubel', 'Hasu', 'Mithu', 'Raju', 'Rasel', 'Jihad', 'Mymuna', 'Mamun', 'Akmol', 'Belal', 'Mizan', 'Suman', 'Oishi', 'Juliya', 'Kolpana', 'Pakhi', 'Tanvir', 'Wajed', 'Jakia', 'Afroza', 'Alauddin', 'Rabaya', 'Keya', 'Shamim', 'Faisal', 'Nahid', 'Tumpa', 'Tuli', 'Rimon', 'Subroto' ];
const studentRoll = [01, 25, 36, 13, 48, 98, 75, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 02, 03, 04, 10, 11, 15, 23, 27];

const studentAge = [28, 32, 30, 20, 19, 24, 19, 21, 21, 25, 25, 25, 16, 15, 16, 16, 25, 22, 14, 17, 18, 16, 17, 26, 25, 24, 21, 22, 20, 25];

const studentClass = [16, 20, 18, 12, 13, 14, 13, 12, 10, 9, 6, 8, 12, 14, 15, 10, 9, 8, 7, 12, 5, 10, 14, 17, 12, 14, 10, 16, 14, 15];

const studentGender = ['Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Famale', 'Male', 'Male', 'Male', 'Male', 'Male', 'Famale', 'Famale', 'Famale', 'Famale', 'Male', 'Male', 'Famale', 'Famale', 'Male', 'Famale', 'Famale', 'Male', 'Male', 'Male', 'Famale', 'Famale', 'Male', 'Male'];

const studentLocation = ['Pabna', 'Rajshahi', 'Nator', 'Dhaka', 'Pabna', 'Rajshahi', 'Dhaka', 'Rajshahi', 'Nator', 'Dhaka', 'Pabna', 'Rajshahi', 'Nator','Pabna', 'Rajshahi', 'Nator', 'Dhaka', 'Pabna', 'Rajshahi', 'Nator', 'Dhaka', 'Rajshahi','Dhaka', 'Pabna', 'Rajshahi', 'Nator', 'Dhaka', 'Pabna', 'Nator', 'Dhaka',];

const updateBlock = (value) => {- };

const studentFees = [500, 400, 700, 1000, 300, 500, 800, 450, 660, 850, 750, 250, 360, 500, 400, 700, 1000, 300, 500, 800, 450, 660, 850, 750, 250, 360, 870, 460, 100, 1100];

/* Total Admission fees */
let TotalAdmissionFees = (TotalFees) => {
    let total = 0;

    for (let number of TotalFees){
        total += number;
    }
    return total;
}

updateBlock(TotalAdmissionFees(studentFees));
