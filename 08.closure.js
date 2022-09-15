// - Create a closure which has one inner function.


function outerUser() {
    let name = "Abhijeet"
    function innerUser() {
        console.log(`${name}`);
    }
    innerUser();
}
// outerUser();




// - Create a closure which has three inner functions.

function firstUser() {
    let name = "Abhijeet"

    function secondUser() {

        function thirdUser() {

            function fourthUser() {

                console.log(`${name}`)

            }
            fourthUser();
        }
        thirdUser();
    }
    secondUser();
}
firstUser();