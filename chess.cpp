#include <iostream>
#include <vector>

using namespace std;

class Piece {
public:
    virtual vector<pair<int, int>> MoveWays() = 0; // Phương thức ảo cho các nước đi
    virtual char Color() = 0; // Màu sắc của quân cờ
};

class Knight : public Piece {
public:
    vector<pair<int, int>> MoveWays() override {
        return {{2, 1}, {2, -1}, {-2, 1}, {-2, -1}, {1, 2}, {1, -2}, {-1, 2}, {-1, -2}};
    }

    char Color() override {
        return 'N'; // N cho Knight
    }
};

class Board {
private:
    vector<vector<Piece*>> matrix; // Bàn cờ 8x8

public:
    Board() {
        matrix.resize(8, vector<Piece*>(8, nullptr)); // Khởi tạo bàn cờ
    }

    Piece* GetPiece(int x, int y) {
        return matrix[x][y]; // Lấy quân cờ tại vị trí (x, y)
    }

    void PlacePiece(Piece* piece, int x, int y) {
        matrix[x][y] = piece; // Đặt quân cờ tại vị trí (x, y)
    }
};

bool MoveValid(Board& board, int x, int y, Piece* piece) {
    // Kiểm tra tính hợp lệ của nước đi
    return (x >= 0 && x < 8 && y >= 0 && y < 8 && board.GetPiece(x, y) == nullptr);
}

void Move(Board& board, Piece* piece, int x, int y) {
    // Di chuyển quân cờ
    cout << "Moved piece to (" << x << ", " << y << ")\n";
    board.PlacePiece(piece, x, y); // Cập nhật bàn cờ
}

class Player {
private:
    char turn; // Lượt của người chơi

public:
    Player(char t) : turn(t) {}

    void LuotDi(Board& board, Piece* piece, int x, int y) {
        while (true) {
            if (MoveValid(board, x, y, piece)) {
                Move(board, piece, x, y);
                break; // Thoát vòng lặp sau khi di chuyển thành công
            } else {
                cout << "Invalid move!\n";
                break; // Thoát vòng lặp nếu nước đi không hợp lệ
            }
        }
    }
};

int main() {
    Board board;
    Knight knight;
    Player player('W'); // Người chơi màu trắng

    board.PlacePiece(&knight, 0, 0); // Đặt quân mã tại (0, 0)
    player.LuotDi(board, &knight, 2, 1); // Di chuyển quân mã đến (2, 1)

    return 0;
}