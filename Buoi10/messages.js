const chatMessages = [
    {
      id: 1,
      role: "user",
      content: "Xin chào, bạn có thể giúp tôi với dự án ChatGPT không?"
    },
    {
      id: 2,
      role: "assistant",
      content: "Chào bạn! Tôi rất vui được giúp đỡ. Bạn cần hỗ trợ gì về dự án ChatGPT?"
    },
    {
      id: 3,
      role: "user",
      content: "Làm thế nào để tích hợp API của OpenAI vào ứng dụng của tôi?"
    },
    {
      id: 4,
      role: "assistant",
      content: "Để tích hợp API của OpenAI, bạn cần thực hiện các bước sau: 1. Đăng ký tài khoản OpenAI, 2. Lấy API key, 3. Cài đặt thư viện OpenAI cho ngôn ngữ lập trình của bạn, 4. Gửi yêu cầu API sử dụng key và endpoint phù hợp. Bạn muốn tôi giải thích chi tiết bước nào?"
    },
    {
      id: 5,
      role: "user",
      content: "Tôi gặp lỗi 'API rate limit exceeded' khi gọi API, phải làm sao?"
    },
    {
      id: 6,
      role: "assistant",
      content: "Lỗi 'API rate limit exceeded' xảy ra khi bạn vượt quá giới hạn số lượng yêu cầu cho phép. Để khắc phục, bạn có thể: 1. Đợi một lúc rồi thử lại, 2. Tăng thời gian giữa các yêu cầu, 3. Nâng cấp gói API của bạn, 4. Sử dụng kỹ thuật retry với exponential backoff."
    },
    {
      id: 7,
      role: "user",
      content: "Làm sao để lưu trữ lịch sử chat hiệu quả?"
    },
    {
      id: 8,
      role: "assistant",
      content: "Để lưu trữ lịch sử chat hiệu quả, bạn có thể: 1. Sử dụng cơ sở dữ liệu như MongoDB hoặc PostgreSQL, 2. Lưu trữ theo phiên chat với ID duy nhất, 3. Chỉ lưu nội dung cần thiết (nội dung, timestamp, user ID), 4. Cân nhắc nén dữ liệu nếu cần, 5. Triển khai caching để truy xuất nhanh hơn."
    },
    {
      id: 9,
      role: "user",
      content: "Tôi muốn thêm tính năng ghi nhớ ngữ cảnh trong cuộc trò chuyện, làm thế nào?"
    },
    {
      id: 10,
      role: "assistant",
      content: "Để thêm tính năng ghi nhớ ngữ cảnh, bạn có thể: 1. Sử dụng tham số 'messages' trong API call để gửi lịch sử chat, 2. Quản lý một mảng chứa các tin nhắn gần đây, 3. Cập nhật mảng này sau mỗi tương tác, 4. Giới hạn số lượng tin nhắn gửi đi để tránh vượt quá token limit. Bạn cần hướng dẫn cụ thể về phần nào?"
    }
  ];