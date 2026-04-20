
![ai ponybot](https://github.com/user-attachments/assets/69aa1ebe-e435-4b0e-8483-56d1c78d5ced)
![그림5](https://github.com/user-attachments/assets/f4d97932-5e42-46d3-ba94-7b5e29a37da5)

# NeoPixel light extension for AI Ponybot  
AI 포니봇용 네오픽셀 조명 확장 블록

This MakeCode extension provides a set of programmable blocks for controlling the **AI Ponybot**, a micro:bit-based smart robot developed by **boundaryX**.  
이 MakeCode 확장은 **boundaryX**에서 개발한 마이크로비트 기반 스마트 로봇인 **AI 포니봇**을 제어하기 위한 블록을 제공합니다.

This MakeCode extension controls the 4 onboard NeoPixel LEDs of the AI Ponybot.  
It is separated from the main extension to ensure reliable Bluetooth communication with smartphones.  
이 확장은 AI 포니봇에 내장된 4개의 네오픽셀 LED를 제어합니다.  
스마트폰과의 블루투스 통신을 안정적으로 유지하기 위해 본체 확장에서 분리되어 개발되었습니다.


---

## ✨ Features / 주요 기능

- Easy control of 4 NeoPixel LEDs using simple and advanced lighting effects
  간단하고 다양한 라이트 효과를 통해 4개의 네오픽셀 LED를 손쉽게 제어
- Create colorful patterns using RGB values, rainbow effects, bar graphs
  RGB 값, 무지개 효과, 그래프 효과 등 다양한 색상 패턴 구현 가능
- Lightweight and optimized for on-board use with AI Ponybot
  AI 포니봇의 내장 LED 제어에 최적화된 경량화 확장
- Separated from basic blocks(ai_ponybot_basic) to avoid Bluetooth communication conflicts
  블루투스 통신과의 충돌을 방지하기 위해 기본 블록과 분리 구성
  (basic block link : https://github.com/boundary-x/ai_ponybot_basic)

---

## ℹ️ Why It's Separated / 왜 분리했나요?

1. **AI Ponybot receives AI recognition results from a smartphone via Bluetooth.**  
   포니봇은 스마트폰으로부터 AI 인식 결과를 블루투스를 통해 실시간으로 전달받습니다.

2. **Including NeoPixel control in the main extension (`ai_ponybot_basic`) causes conflicts with the Bluetooth stack.**  
   네오픽셀 제어 기능을 기본 확장(`ai_ponybot_basic`)에 포함시키면, 블루투스 블록과 충돌이 발생하게 됩니다.

3. **To avoid these issues, NeoPixel-related blocks were moved to this separate extension (`ai_ponybot_light`).**  
   이러한 충돌을 방지하기 위해 네오픽셀 관련 블록을 본 확장(`ai_ponybot_light`)으로 분리하였습니다.

This approach ensures smooth AI data transmission and LED control without compromising stability.  
이 방식은 AI 인식 데이터 전송과 LED 제어를 모두 안정적으로 수행할 수 있도록 도와줍니다.

---

## 📦 Blocks Overview / 블록 기능 요약
### 🔆 Light Control (Basic) / 라이트 제어(기초)
- `create(pin, count, mode)` : Create NeoPixel strip / 네오픽셀 스트립 생성
- `showColor(color)` : Set all LEDs to one color / 전체 색상 지정
- `clear()` : Turn off all LEDs / 모든 LED 끄기
- `setBrightness(value)` : Set brightness / 밝기 설정
- `createRange(start, length)` : Create sub-range / 범위 설정

### 🎨 Light Control (Advanced) / 라이트 제어(심화)
- `setPixelColor(index, color)` : Set specific LED / 특정 LED 색상 설정
- `showRainbow(start, end)` : Rainbow effect / 무지개 효과
- `showBarGraph(value, max)` : Bar graph effect / 그래프 출력
- `show()` : Apply settings / 설정 적용

### 🌈 Color Utilities / 색상 도구
- `rgb(r, g, b)` : Create color from RGB / RGB 색상 생성
- `hsl(h, s, l)` : Create color from HSL / HSL 색상 생성
- `getColors(preset)` : Select color preset / 색상 프리셋 선택

---

## 🛠 Basic Usage Example / 기본 사용 예시

```typescript
let strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
strip.setBrightness(128)
strip.showColor(NeoPixelColors.Blue)
strip.setPixelColor(0, neopixel.rgb(255, 0, 0))
strip.showRainbow(1, 360)
strip.clear()
```

---
## 📦 Installation / 설치 방법

In MakeCode editor, click **Extensions** → search for:  
MakeCode 에디터에서 **Extensions** 클릭 → 아래 주소 입력  
https://github.com/boundary-x/ai_ponybot_light

---

## 🖼 Example Blocks / 블록 예시
![block example](https://github.com/user-attachments/assets/76379470-773a-453c-9405-0dd44fe0ff80)

---

## Customizations from neopixel.ts / neopixel.ts에서의 커스터마이징 내역
**`ai_ponybot_light` is based on the official [NeoPixel extension] for MakeCode.**  
**본 확장은 마이크로비트의 공식 [NeoPixel 확장 블록]을 기반으로 개발되었습니다.**

### ✅ Summary of Modifications / 수정 사항 요약
## ⚙️ Customizations from `neopixel.ts`

| Change | Description |
|--------|-------------|
| 🌐 **Bilingual Block Labels** | Block texts and group names are provided in both English and Korean. |
| 🔗 **Separated to Avoid BLE Conflict** | Separated from `ai_ponybot_basic` due to BLE conflict with NeoPixel. |
| 📱 **BLE Communication Compatibility** | AI Ponybot receives AI recognition results from a smartphone via Bluetooth, which may conflict with NeoPixel usage. |
| 🧹 **Simplified APIs** | Removed advanced matrix and RGBW control features for a cleaner interface. |
| 🎯 **Ponybot-Specific Defaults** | Defaults set to 4 LEDs on pin P8, matching AI Ponybot hardware specs. |

--- 

## License / 라이선스
  - MIT License
  (c) 2025 boundaryX

--- 

## 💡 Developed By / 개발자 정보
- boundaryX – Future-focused EdTech company providing hardware + AI education kits
  차세대 융합 기술 교육 콘텐츠와 교구를 개발하는 에듀테크 스타트업 boundaryX
- Website: https://boundaryx.io
- product webpage : https://boundaryx.io/shop/?idx=26
- E-mail : hi@boundaryx.io



