// react: useState, useEffect, useContext, useRef, useMemo, useCallback,...
// next: useParams, useRouter,...
// custom hook: useMyHook,...


// const [showAlert, setShowAlert] = useState(false)

// Khi nhấn nút thêm sản phẩm và giỏ hàng => gọi API
// => API trả về: thành công / thất bại
// => Kiểm tra: if (thành công)
// => setShowAlert(true)

return (
    <>
        <Alert show={showAlert}>Thanh cong</Alert>
    </>
)