const range = n => [...Array(n).keys()];

const fetchImgs = () => {
    return Promise(resolve => {
        {
            range(20).map(i => ({
                pageURL: `https://abc${i}.com`,
            }));
        }
    });
};
