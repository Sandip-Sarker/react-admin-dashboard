import { Eye, SquarePen, Trash2 } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";


const Pagination = ({ page, totalPages, onPrev, onNext, setPage }) => (
    <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-800">
        <span className="text-sm text-slate-600 dark:text-slate-300">
            Page {page} of {totalPages}
        </span>
        <div className="flex items-center gap-2">
            <button
                type="button"
                onClick={onPrev}
                disabled={page === 1}
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
                Previous
            </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setPage(index + 1)}
                        className={`h-9 w-9 rounded-md text-sm font-medium transition ${
                            page === index + 1
                                ? "bg-blue-600 text-white"
                                : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}

            <button
                type="button"
                onClick={onNext}
                disabled={page === totalPages}
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
                Next
            </button>
        </div>
    </div>
);

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const pagedUsers = useMemo(() => {
        const start = (page - 1) * pageSize;
        return users.slice(start, start + pageSize);
    }, [users, page, pageSize]);

    const totalPages = Math.ceil(users.length / pageSize);

    const onPrev = () => {
        setPage((current) => Math.max(1, current - 1));
    };

    const onNext = () => {
        setPage((current) => Math.min(totalPages, current + 1));
    };

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch(
                    "https://dummyjson.com/users"
                );

                const data = await response.json();

                setUsers(data.users);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="p-6 space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-600 dark:text-white mb-4">User List</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                    <thead className="bg-slate-50 text-left dark:bg-slate-800">
                        <tr>
                            <th className="px-6 py-3 text-sm font-semibold text-slate-500 uppercase tracking-wide">#</th>
                            <th className="px-6 py-3 text-sm font-semibold text-slate-500 uppercase tracking-wide">Name</th>
                            <th className="px-6 py-3 text-sm font-semibold text-slate-500 uppercase tracking-wide">Email</th>
                            <th className="px-6 py-3 text-sm font-semibold text-slate-500 uppercase tracking-wide">Phone</th>
                            <th className="px-6 py-3 text-sm font-semibold text-slate-500 uppercase tracking-wide">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900">
                        {pagedUsers.map((user, key) => (
                            <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700 dark:text-slate-200">{(page - 1) * pageSize + key + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700 dark:text-slate-200 flex gap-3">
                                    <img className="h-10 w-10 rounded-full object-cover" src={user.image} alt={user.firstName} />
                                    {user.firstName} {user.lastName}
                                    </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">{user.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-300">
                                    <div className="flex items-center gap-3">
                                        <SquarePen className="w-4 h-4"/>
                                        <Eye className="w-4 h-4"/>
                                        <Trash2 className="w-4 h-4"/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination page={page} totalPages={totalPages} onPrev={onPrev} onNext={onNext} setPage={setPage}/>
            </div>
        </div>
    );
};

export default UserList;
