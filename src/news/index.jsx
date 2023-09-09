import {
    useDeleteNewsMutation,
    useGetNewsQuery,
} from "../redux/reducer/async/news";

const News = () => {
    const { isError, isLoading, data, error } = useGetNewsQuery();
    const [mutaionDelete, { isLoading: deleteLoading }] =
        useDeleteNewsMutation();
    if (isLoading) {
        return <div>loading...</div>;
    }
    if (isError) {
        return <div>error {error.message}</div>;
    }
    const handleDelete = async (data) => {
        const response = await mutaionDelete(data);
        console.log(response);
    };
    console.log(data);
    return (
        <div>
            <div>
                <input type="text" />
                <button
                    className="btn"
                    onClick={async () => {
                        const response = await fetch(
                            "https://fakesoftalim.mquvonchbek.uz/api/v1/auth/login",
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    adminname: "eshmat",
                                    password: "1111",
                                }),
                            }
                        );
                        const data = await response.json();
                        console.log(data);
                    }}
                >
                    Add todo
                </button>
            </div>
            <ul>
                {data.news.map((item) => (
                    <li key={item.id}>
                        <img
                            src={item.imgUrl.replace(
                                "https://softalim",
                                "https://fakesoftalim"
                            )}
                            alt="ala"
                        />
                        <input type="text" defaultValue={item.title} />
                        <button className="btn" onClick={() => {}}>
                            Edit
                        </button>
                        <button
                            className="btn"
                            onClick={() => handleDelete({ id: item.id })}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
