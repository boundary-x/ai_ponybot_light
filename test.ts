// Create a test NeoPixel strip / 테스트용 스트립 생성
let strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)

// Test showing solid colors / 전체 색상 테스트
strip.showColor(NeoPixelColors.Red)
strip.showColor(NeoPixelColors.Blue)
strip.showColor(neopixel.rgb(255, 255, 0)) // Yellow / 노란색

// Set individual pixel colors / 픽셀 색상 설정
strip.setPixelColor(0, NeoPixelColors.Green)
strip.setPixelColor(1, neopixel.rgb(128, 0, 128)) // Purple / 보라색

// Test brightness adjustment / 밝기 조절 테스트
strip.setBrightness(100)

// Show rainbow effect / 무지개 효과
strip.showRainbow(1, 360)

// Show bar graph effect / 바 그래프 테스트
strip.showBarGraph(2, 4)

// Get strip length / 길이 테스트
let len = strip.getLength()

// Create range and set color / 특정 범위 생성 후 색상 설정
let range = strip.createRange(1, 2)
range.showColor(NeoPixelColors.White)

// Clear all pixels / 전체 끄기
strip.clear()

// Test HSL color conversion / HSL 색상 변환 테스트
let hslColor = neopixel.hsl(120, 50, 50) // Greenish tone / 초록 계열
strip.showColor(hslColor)
