# LazyLoading
화면에 보이지 않는 이미지를 미리 로딩하지 않아 사용자의 데이터 사용을 줄일 수 있는 아주 간단한 자바스크립트 라이브러리 입니다.

* 컴포넌트에 대한 의존성이 없습니다.

## Get Started
간단한 규칙과 생성자 함수 호출만으로 이미지 로딩 지연 효과를 보실 수 있습니다. 

1. DOM이 Load되면 LazyLoading 인스턴스를 생성합니다.
2. HTML 소스코드에서 IMG태그의 src대신 data-src를 사용합니다.
(LazyLoading 인스턴스가 실제로 보이게 되는 시점을 감지하여 data-src 정보를 src 정보로 변경하게 됩니다.)

* 예제 소스코드는 데모 문서를 참고 하세요.

###  Method
#### new LazyLoading([wrapper, autoDestroy])
##### LazyLoading 인스턴스를 생성하고 실행합니다.
- wrapper - 이미지를 감싸고 있는 엘리먼트 객체입니다. 기본값은 ```window``` 입니다.
- autoDestroy - LazyLoading은 등록된 이미지를 모두 로드하게 되면 이미지 로딩 시점 감지를 위한 ```wrapper```에 연결해 둔 이벤트를 해제합니다.
autoDestroy값을 ```false```로 입력하시면 이후에 ```put```메서드를 사용하여 동적으로 이미지 엘리먼트를 추가할 수 있습니다. 기본 값은 ```true``` 입니다.

### put(collection)
#### 동적으로 LazyLoading할 이미지를 추가할 수 있습니다.
- ```collection``` - 추가로 로드할 이미지 ```NodeList```를 입력받습니다. ```NodeList```는 ```document.querySelectAll```을 이용하여 가져 올 수 있습니다.

### destroy()
#### ```LazyLoading```을 위해 ```wrapper```에 bind된 모든 이벤트를 제거합니다. 이 메서드가 호출 된 이후에는 ```LazyLoading```가 더이상 동작하지 않습니다.

### resizing()
#### 이미지 로딩 시점은 ```wrapper```의 높이와 너비로 감지합니다. ```wrapper``` 크기가 변경되면 반드시 ```reszing()``` 메서드를 호출해 주시기 바랍니다. 로딩 시점을 다시 계산하게 됩니다.
