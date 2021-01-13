



const mandel = (x0, y0, maxSteps) => {
	const table = []
	table.push({x: x0, y: y0})

	for (let n = 1; n < maxSteps; n++){

		table.push({
			x: table[n-1].x * table[n-1].x - table[n-1].y * table[n-1].y + x0,
			y: 2 * table[n-1].x * table[n-1].y + y0
		})
	}
	// console.log(table)
	return table
}


const initCanvas = (options) => {
	
	const {
			//container: container,
	 		width: width, 
		 	height: height, 
			background: background
		} = options
	
	// Create Canvas
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    document.body.appendChild(canvas)
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = background
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	return ctx
}

const drawPixels = (options) => {

		const {
			ctx: ctx,
			coords: coords,
			scale: scale,
			color: color,
			pixelSizeX: pixelSizeX,
			pixelSizeY: pixelSizeY,
			shiftX: shiftX,
			shiftY: shiftY,
		} = options
    // Start drawing
    ctx.fillStyle = color
	coords.forEach((coord) => {
		ctx.fillRect( coord.x * scale + shiftX, coord.y * scale + shiftY, pixelSizeX, pixelSizeY )
	})
	
}


const ctx = initCanvas({
	 		width: 600, 
		 	height: 600, 
			background: "white"
		})

drawPixels({
			ctx: ctx, 
			coords: mandel(.3211, 0.41, 10000),
			scale: 600,
			pixelSizeX: 2,
			pixelSizeY: 2,
			shiftX: 300,
			shiftY: 100,
			color: "black"
		})
