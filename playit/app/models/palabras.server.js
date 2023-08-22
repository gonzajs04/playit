export async function getPalabras(){
    const response = await fetch(`${process.env.API_WORDS_URL}`);
    return await response.json();
}