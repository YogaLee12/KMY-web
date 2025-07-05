'use client'

import { useState } from 'react'

export default function FeedbackPage() {
    const [value, setValue] = useState('')

    return (
    <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold">用户反馈</h1>
        <textarea
        placeholder="请填写您的建议..."
        className="w-full h-32 p-2 border rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">提交</button>
    </main>
    )
}
