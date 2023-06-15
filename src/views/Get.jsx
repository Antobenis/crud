import React, { useState, useEffect } from 'react'
import { Table, Divider } from 'antd';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export const Get = () => {
    const [data, setData] = useState(null);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text,record) => <Link to={`/view/${record && record.id}`}>{text}</Link>
        },
        {
            title: 'Year',
            dataIndex: 'year',
        },
        {
            title: 'Colors',
            dataIndex: 'color',
        },
    ];
    useEffect(() => {
        axios.get('https://reqres.in/api/users5')
            .then(function (response) {
                // handle success
                console.log(response?.data?.data);
                setData(response?.data?.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <>
            <Table
                rowKey={(record) => (record.id)}
                columns={columns}
                dataSource={data}
                size="middle"
            />
        </>
    )
}
