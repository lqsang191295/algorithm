//Link: https://practice.geeksforgeeks.org/problems/final-destination/0
//Tìm tất cả đường đi
// Check array indexOf other array
const maxx = 3;
const maxy = 3;
const matrix = [];
//
const queue = []; // Chứa item chuẩn bị được quét
const scaned = []; // Chứa item đã quét qua
const result = []; // Kết quả đường đi ngắn nhất

function init() {
    for(let i = 0; i < maxx; i ++) {
        let row = [];
        for(let j = 0; j < maxy; j++) {
            row[j] = 0;
        }
        matrix[i] = row;
    }
}
init();
// Hàm xử lý khi gặp điểm cuối
const pointEnd = [2, 2];
const handleEndPoint = (position) => {
    if(position[0] == pointEnd[0] && position[1] == pointEnd[1]) {
        console.log('End --- queue', queue)
        console.log('End --- scaned', scaned)
        console.log('End --- result', result)
        return
    }
} 
// Hàm xử lý khi quét qua 1 điểm
const handlePointed = (position) => {
    const path = getPath(position, 3); // 6: mảng 5x5
    queue.push(...path); // Đặt đường đi của vị trí (0, 0) vào queue
    if(!isQueued(position)) {
        result.push(position); // Đặt đường đi bắt đầu từ (0, 0)
    }
    scaned.push(position); // Đặt vị trí (0, 0) đã quét
    handleEndPoint(position);
}
// Lấy đường đi của 1 điểm đẩy
const getPath = (position, n) => {
    let paths = [];
    const x = position[0], y = position[1];
	if(x - 1 > 0 && !isScaned([x - 1, y])) paths.push([x - 1, y]);
	if(x + 1 < n && !isScaned([x + 1, y])) paths.push([x + 1, y]);
	if(y - 1 > 0 && !isScaned([x, y - 1])) paths.push([x, y - 1]);
	if(y + 1 < n && !isScaned([x, y + 1])) paths.push([x, y + 1]);
	return paths;
}
// Check xem trong mảng scaned có chứa item đó chưa
const isItemInArray = (array, item) => { 
    const n = array.length;
	for (var i = 0; i < n; i++) { 
		if (array[i][0] == item[0] && array[i][1] == item[1]) { 
			return true;
		} 
	} 
	return false;
}
// Check scaned
const isScaned = (val) => {
	return isItemInArray(scaned, val);
}
// Check queue
const isQueued = (val) => {
	return isItemInArray(queue, val);
}
// Tim vi tri dau tien
handlePointed([0, 0])
//
var i = 0;
function run() {
    // if(i == 2) {
    //     return
    // }
    if(queue.length == 0) return;
    console.log("queue", queue)
    const item = queue.shift();
	if(item) {
        console.log("item", item)
        handlePointed(item);
        console.log("queue111111111", queue)

        // i++;
        run();
        
    } 
    return;
}
run();


