/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    //slice without arguments creates a copy
    let copiedMoviesArray = moviesArray.slice()

    let sortedArray = copiedMoviesArray.sort(function (a, b) {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            } else {
                return -1;
            }
        }
        return a.year - b.year
    })
    return sortedArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(steveArray) {
    let result = 0
    steveArray.filter(function (dramaSteve) {
        if (dramaSteve.genre === "Drama" && dramaSteve.director === "Steven Spielberg") {
            result++;
        } else {
            return 0;
        }
    })
    return result;
}

howManyMovies(movies)


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(firstArray) {

    let copiedFirstArray = firstArray.slice()
    //need to copy the original array, which u pass into the function, when doing sort
    let alphaOrder = copiedFirstArray.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        } else {
            return -1;
        }
    })
    let resultArr = alphaOrder.map(movTitle => movTitle.title)
    //return resultArr

    //let topTitle=[]
    if (resultArr.length <= 20) {
        //topTitle.push(resultArr)
        return resultArr
    } else {
        return resultArr.slice(0, 20)
    }


    /*
    for (let i = 20; resultArr.length < i; i++) {
        topTitle.push(resultArr)
    }
    */

}

orderAlphabetically(movies)


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(ratesArray) {

    let rateTotal = movies.reduce(function (sum, rate) { return movies.rate + sum }, 0)
    return rateTotal

    let rounded = Math.round(rateTotal)
    return rounded

    //let rateTotal = movies.map(movie => (movies.rate.reduce((sum, n) => sum + n, 0) / movies-rate[i]))
    //let resultRate = ratesArray.map(function(number) { return number })

    //let rateSum = movies.rate.map(function(number) { return number })
    // resultRate.reduce(function(sum,el) { return sum + el },0 )

    //let resultRate = ratesArray.map(movTitle => movTitle.title) 
    //Math.round(ratesArray)
}

ratesAverage(movies)



//get the average of 2 movies with the rate of 8
function averEight(averArr) {

    let resultArr = []
    resultArr.push(filteredArray = movies.rate.filter(function (number) {
        return number = 8
    }))
    if (resultArr.length === 2) {
        return resultArr //and divide by 2
    } else {
        //get two objects and divide by 2
    }
}
return averEight(movies)
    


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(dramaArr) {

    let avResDrama = dramaArr.filter(function (favDrama) {
            if (favDrama.genre === "Drama") {
                return avResDrama;
            } else {
                return 0;
            }
        })
    
    avResDrama.reduce(function(sum, movie) {return movie.rate + sum },0); 

}

Math.round(dramaMoviesRate(movies))

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (magic) {

    let objIndex = magic.findIndex(obj => obj === "duration");
    let updatedObj = { ...magic[objIndex], duration: §{movies.duration[0] * 2} + ${movies.duration[1]} };
    return updatedObj
    
    let resultArr = [movies.slice(0, objIndex), updatedObj, movies.slice(objIndex + 1),];
    return resultArr

}

turnHoursToMinutes(movies)


// BONUS Iteration: Best yearly rate average - Best yearly rate average
