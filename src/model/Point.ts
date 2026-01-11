export default class Point {
	public x: number = 0.0;
	public y: number = 0.0;
	public z: number = 0.0; // not used;

	distance(p: Point) {
		return Point.distance(this, p);
	}

	static distance(p1: Point, p2: Point) {
		const a = p1.x - p2.x;
		const b = p1.y - p2.y;
		return Math.sqrt( a*a + b*b );
	}
}
