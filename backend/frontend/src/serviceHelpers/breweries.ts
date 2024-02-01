export const searchBreweries = async () => {}
//     fetch(`/brewery-search?name=${searchString}`)
//             .then( res => res.json())
//             .then( data => {
//                 if (!!data.message) {
//                     setIsLoading(false);
//                     setErrorMessage(data.message);
//                     return;
//                 }
//                 setSearchString('');
//                 dispatch(change(data));
//                 setIsLoading(false);
//                 console.log(data)
//             }).catch(error => console.log(error.message, '/////'));
// }