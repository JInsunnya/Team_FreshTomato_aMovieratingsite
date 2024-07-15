export const test = async (title_kor, id) => {
    try {
        const response = await apiCall.get("https://port-0-minihackathon-12-lyec0qpi97716ac6.sel5.cloudtype.app/movie/list", {
            moviename : title_kor,
            movieid : id,
        });
        return response.data;
    } catch(error){
        return error;
    }
};