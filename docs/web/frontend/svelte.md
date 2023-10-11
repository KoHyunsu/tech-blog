---
sidebar_position: 1
---

# Svelte

## 소개

:::info
### ["Frameworks without the framework"](https://svelte.dev/blog/frameworks-without-the-framework)
:::

**Library :** 재사용 가능한 도구의 모음

**Framework :** 도구의 모음을 넘어, 개발자에게 규칙과 패턴을 강제하는 틀, Angular, Vue, React(엄밀히 따지자면 Library로 분류됨) 등

**Framework**는 정해진 틀 덕분에 개발 품질을 일정 수준으로 유지하기 쉽다.

그러나 정해진 틀을 유지하기 위해 코드양이 많아지는 것을 감수해야 한다. 

```js
// Vue
export default {
    data: function() {
        return {
            a: 1,
            b: 2
        };
    };
    /* */
}

// React
export default () => {
    const [a , setA] = useState(1); 
    const [b , setB] = useState(1);
    /* */
}
```

<br/>

**Svelte** : "틀을 지우자"

HTML, CSS, JS로 충분하다. 별도의 틀은 필요하지 않다.

```js
// Svelte
let a = 1;
let b = 2;
```

**특징**

- **compiled**
    - Compile = Virtual Dom을 사용하지 않기 때문에 번들링 과정에서 엔진을 포함하지 않고 대부분의 코드를 '순수 JS'로 변환
    - Svelte = Compiler
    - 덕분에 번들도 아주 작아짐 => 네트워크 비용 감소하는 등의 이점
    - (Vue, React 등은 Virtual Dom을 사용해 각각의 엔진을 번들에 포함, 앱이 작동되는 런타임(브라우저 등)에서 액션 처리)

- **compact**
    - 이미 알고 있는 HTML, CSS, JS를 사용하여 아주 간결한 컴포넌트를 작성 가능함
    - 별도의 틀을 위한 문법이 적어 배우기 쉬움 

- **complete**
    - Scoped styling, State Management, Motion Primitives, Form Bindings 등 프론트엔드 개발 시 필요한 거의 모든 필수 요소가 내장됨 
    - 추가 라이브러리(npm)들을 찾고 설치하는 데 많은 시간을 들일 필요가 없음

**실습 방법**

- [REPL](https://svelte.dev/repl/hello-world?version=4.2.1) : 브라우저에서 Svelte 코드(.svelte)를 입력하면 그 결과를 바로 확인 가능

- [로컬 환경](https://kit.svelte.dev/docs/creating-a-project) : 실습을 진행할 컴퓨터에 [Node.js](https://nodejs.org/ko) 설치 후 다음 명령어 순서대로 수행
    
    - (사전 준비) [Node.js](https://nodejs.org/ko) 설치 

    ```bash
    # 다음 명령어 순서대로 수행
    npm create svelte@latest my-svelte-app
    cd my-svelte-app
    npm install
    npm run dev
    ```

## State

## Reactivity

메인 이벤트가 발생했을 때 그와 연결된 나머지 이벤트들도 이어서 반응하고 자동으로 발생 가능

[Reactivity 공식 문서](https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive)

## Event

[Event 공식 문서](https://svelte.dev/docs/element-directives#on-eventname)

## Props

[Props 공식 문서](https://svelte.dev/docs/basic-markup#attributes-and-props)

## Block

[Logic Block 공식 문서](https://svelte.dev/docs/logic-blocks)

## Binding

[Bind 공식 문서](https://svelte.dev/docs/element-directives#bind-property)

## Slot

[<slot> 공식 문서](https://svelte.dev/docs/special-elements#slot)

## context API

[Context 공식 문서](https://svelte.dev/docs/svelte#setcontext)

## dispatch

[Dispatch 공식 문서](https://svelte.dev/docs/svelte#createeventdispatcher)

## store

[Store 공식 문서](https://svelte.dev/docs/svelte-store)

## transition

[Transition 공식 문서](https://svelte.dev/docs/svelte-motion)

## motion

[Motion 공식 문서](https://svelte.dev/docs/svelte-motion)

## actions

[Action 공식 문서](https://svelte.dev/docs/svelte-action)

## <svelte\>

[<svelte> 공식 문서](https://svelte.dev/docs/special-elements#svelte-self)

## ~~fetch~~

## ~~axios~~

## ~~rollup~~