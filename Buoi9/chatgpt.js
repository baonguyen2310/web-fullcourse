// Chatgpt:
// - Tạo 3 object tin nhắn có các thuộc tính: id, content, createdAt, from, to
// - Tạo một mảng chứa 3 object tin nhắn

const message1 = {
    id: 1,
    content: "Xin chào",
    createdAt: new Date(),
    from: "user1",
    to: "chatgpt"
}

const message2 = {
    id: 2,
    content: "Xin chào bạn, tôi có thể giúp gì cho bạn?",
    createdAt: new Date(),
    from: "chatgpt",
    to: "user1"
}

const message3 = {
    id: 3,
    content: "Tôi muốn mua một chiếc quần kaki",
    createdAt: new Date(),
    from: "user1",
    to: "chatgpt"
}

const messages = [message1, message2, message3];

console.log(messages);