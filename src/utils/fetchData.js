export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd54dd57873msh1311179768e6997p1238a0jsn819de05ec4cd',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const ytoptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd54dd57873msh1311179768e6997p1238a0jsn819de05ec4cd',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd54dd57873msh1311179768e6997p1238a0jsn819de05ec4cd',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}