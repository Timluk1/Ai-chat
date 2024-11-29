export const chats = [
    {
        id: 1,
        name: "Bubble sort",
        history: [
            {
                role: "user",
                parts: [
                    { text: "write a bubble sort on 5 languages" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "Here's a bubble sort implementation in five different programming languages: Python, JavaScript, C++, Java, and Go.  Each example sorts a list of integers in ascending order.\n\n**Python:**\n\n```python\ndef bubble_sort(list_):\n  n = len(list_)\n  for i in range(n-1):\n    for j in range(n-i-1):\n      if list_[j] > list_[j+1]:\n        list_[j], list_[j+1] = list_[j+1], list_[j]  # Pythonic swap\n  return list_\n\nmy_list = [64, 34, 25, 12, 22, 11, 90]\nsorted_list = bubble_sort(my_list)\nprint(\"Sorted array:\", sorted_list)\n```\n\n**JavaScript:**\n\n```javascript\nfunction bubbleSort(arr) {\n  let len = arr.length;\n  for (let i = 0; i < len - 1; i++) {\n    for (let j = 0; j < len - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        // Swap elements\n        let temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n      }\n    }\n  }\n  return arr;\n}\n\nlet myArray = [64, 34, 25, 12, 22, 11, 90];\nlet sortedArray = bubbleSort(myArray);\nconsole.log(\"Sorted array:\", sortedArray);\n```\n\n**C++:**\n\n```cpp\n#include <iostream>\n#include <vector>\n\nstd::vector<int> bubbleSort(std::vector<int> arr) {\n  int n = arr.size();\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        std::swap(arr[j], arr[j + 1]); // Use std::swap for efficiency\n      }\n    }\n  }\n  return arr;\n}\n\nint main() {\n  std::vector<int> myArray = {64, 34, 25, 12, 22, 11, 90};\n  std::vector<int> sortedArray = bubbleSort(myArray);\n  std::cout << \"Sorted array: \";\n  for (int x : sortedArray) std::cout << x << \" \";\n  std::cout << std::endl;\n  return 0;\n}\n```\n\n**Java:**\n\n```java\nimport java.util.Arrays;\n\npublic class BubbleSort {\n  public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n - 1; i++) {\n      for (int j = 0; j < n - i - 1; j++) {\n        if (arr[j] > arr[j + 1]) {\n          // Swap arr[j] and arr[j+1]\n          int temp = arr[j];\n          arr[j] = arr[j + 1];\n          arr[j + 1] = temp;\n        }\n      }\n    }\n  }\n\n  public static void main(String[] args) {\n    int[] myArray = {64, 34, 25, 12, 22, 11, 90};\n    bubbleSort(myArray);\n    System.out.println(\"Sorted array: \" + Arrays.toString(myArray));\n  }\n}\n```\n\n**Go:**\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc bubbleSort(arr []int) []int {\n\tn := len(arr)\n\tfor i := 0; i < n-1; i++ {\n\t\tfor j := 0; j < n-i-1; j++ {\n\t\t\tif arr[j] > arr[j+1] {\n\t\t\t\tarr[j], arr[j+1] = arr[j+1], arr[j] // Go's concise swap\n\t\t\t}\n\t\t}\n\t}\n\treturn arr\n}\n\nfunc main() {\n\tmyArray := []int{64, 34, 25, 12, 22, 11, 90}\n\tsortedArray := bubbleSort(myArray)\n\tfmt.Println(\"Sorted array:\", sortedArray)\n}\n```\n\nRemember that Bubble Sort is inefficient for large datasets; consider more efficient algorithms like Merge Sort or Quick Sort for better performance in those cases.\n" },
                ],
            },
            {
                role: "user",
                parts: [
                    { text: "how are you?" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "I am doing well, thank you for asking!  As a large language model, I don't experience emotions or feelings in the same way humans do, but I'm functioning optimally and ready to assist you.  How can I help you today?\n" },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "Bubble sort",
        history: [
            {
                role: "user",
                parts: [
                    { text: "write a bubble sort on 5 languages" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "Here's a bubble sort implementation in five different programming languages: Python, JavaScript, C++, Java, and Go.  Each example sorts a list of integers in ascending order.\n\n**Python:**\n\n```python\ndef bubble_sort(list_):\n  n = len(list_)\n  for i in range(n-1):\n    for j in range(n-i-1):\n      if list_[j] > list_[j+1]:\n        list_[j], list_[j+1] = list_[j+1], list_[j]  # Pythonic swap\n  return list_\n\nmy_list = [64, 34, 25, 12, 22, 11, 90]\nsorted_list = bubble_sort(my_list)\nprint(\"Sorted array:\", sorted_list)\n```\n\n**JavaScript:**\n\n```javascript\nfunction bubbleSort(arr) {\n  let len = arr.length;\n  for (let i = 0; i < len - 1; i++) {\n    for (let j = 0; j < len - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        // Swap elements\n        let temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n      }\n    }\n  }\n  return arr;\n}\n\nlet myArray = [64, 34, 25, 12, 22, 11, 90];\nlet sortedArray = bubbleSort(myArray);\nconsole.log(\"Sorted array:\", sortedArray);\n```\n\n**C++:**\n\n```cpp\n#include <iostream>\n#include <vector>\n\nstd::vector<int> bubbleSort(std::vector<int> arr) {\n  int n = arr.size();\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        std::swap(arr[j], arr[j + 1]); // Use std::swap for efficiency\n      }\n    }\n  }\n  return arr;\n}\n\nint main() {\n  std::vector<int> myArray = {64, 34, 25, 12, 22, 11, 90};\n  std::vector<int> sortedArray = bubbleSort(myArray);\n  std::cout << \"Sorted array: \";\n  for (int x : sortedArray) std::cout << x << \" \";\n  std::cout << std::endl;\n  return 0;\n}\n```\n\n**Java:**\n\n```java\nimport java.util.Arrays;\n\npublic class BubbleSort {\n  public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n - 1; i++) {\n      for (int j = 0; j < n - i - 1; j++) {\n        if (arr[j] > arr[j + 1]) {\n          // Swap arr[j] and arr[j+1]\n          int temp = arr[j];\n          arr[j] = arr[j + 1];\n          arr[j + 1] = temp;\n        }\n      }\n    }\n  }\n\n  public static void main(String[] args) {\n    int[] myArray = {64, 34, 25, 12, 22, 11, 90};\n    bubbleSort(myArray);\n    System.out.println(\"Sorted array: \" + Arrays.toString(myArray));\n  }\n}\n```\n\n**Go:**\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc bubbleSort(arr []int) []int {\n\tn := len(arr)\n\tfor i := 0; i < n-1; i++ {\n\t\tfor j := 0; j < n-i-1; j++ {\n\t\t\tif arr[j] > arr[j+1] {\n\t\t\t\tarr[j], arr[j+1] = arr[j+1], arr[j] // Go's concise swap\n\t\t\t}\n\t\t}\n\t}\n\treturn arr\n}\n\nfunc main() {\n\tmyArray := []int{64, 34, 25, 12, 22, 11, 90}\n\tsortedArray := bubbleSort(myArray)\n\tfmt.Println(\"Sorted array:\", sortedArray)\n}\n```\n\nRemember that Bubble Sort is inefficient for large datasets; consider more efficient algorithms like Merge Sort or Quick Sort for better performance in those cases.\n" },
                ],
            },
            {
                role: "user",
                parts: [
                    { text: "how are you?" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "I am doing well, thank you for asking!  As a large language model, I don't experience emotions or feelings in the same way humans do, but I'm functioning optimally and ready to assist you.  How can I help you today?\n" },
                ],
            },
        ],
    },
    {
        id: 3,
        name: "Bubble sort",
        history: [
            {
                role: "user",
                parts: [
                    { text: "write a bubble sort on 5 languages" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "Here's a bubble sort implementation in five different programming languages: Python, JavaScript, C++, Java, and Go.  Each example sorts a list of integers in ascending order.\n\n**Python:**\n\n```python\ndef bubble_sort(list_):\n  n = len(list_)\n  for i in range(n-1):\n    for j in range(n-i-1):\n      if list_[j] > list_[j+1]:\n        list_[j], list_[j+1] = list_[j+1], list_[j]  # Pythonic swap\n  return list_\n\nmy_list = [64, 34, 25, 12, 22, 11, 90]\nsorted_list = bubble_sort(my_list)\nprint(\"Sorted array:\", sorted_list)\n```\n\n**JavaScript:**\n\n```javascript\nfunction bubbleSort(arr) {\n  let len = arr.length;\n  for (let i = 0; i < len - 1; i++) {\n    for (let j = 0; j < len - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        // Swap elements\n        let temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n      }\n    }\n  }\n  return arr;\n}\n\nlet myArray = [64, 34, 25, 12, 22, 11, 90];\nlet sortedArray = bubbleSort(myArray);\nconsole.log(\"Sorted array:\", sortedArray);\n```\n\n**C++:**\n\n```cpp\n#include <iostream>\n#include <vector>\n\nstd::vector<int> bubbleSort(std::vector<int> arr) {\n  int n = arr.size();\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        std::swap(arr[j], arr[j + 1]); // Use std::swap for efficiency\n      }\n    }\n  }\n  return arr;\n}\n\nint main() {\n  std::vector<int> myArray = {64, 34, 25, 12, 22, 11, 90};\n  std::vector<int> sortedArray = bubbleSort(myArray);\n  std::cout << \"Sorted array: \";\n  for (int x : sortedArray) std::cout << x << \" \";\n  std::cout << std::endl;\n  return 0;\n}\n```\n\n**Java:**\n\n```java\nimport java.util.Arrays;\n\npublic class BubbleSort {\n  public static void bubbleSort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n - 1; i++) {\n      for (int j = 0; j < n - i - 1; j++) {\n        if (arr[j] > arr[j + 1]) {\n          // Swap arr[j] and arr[j+1]\n          int temp = arr[j];\n          arr[j] = arr[j + 1];\n          arr[j + 1] = temp;\n        }\n      }\n    }\n  }\n\n  public static void main(String[] args) {\n    int[] myArray = {64, 34, 25, 12, 22, 11, 90};\n    bubbleSort(myArray);\n    System.out.println(\"Sorted array: \" + Arrays.toString(myArray));\n  }\n}\n```\n\n**Go:**\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc bubbleSort(arr []int) []int {\n\tn := len(arr)\n\tfor i := 0; i < n-1; i++ {\n\t\tfor j := 0; j < n-i-1; j++ {\n\t\t\tif arr[j] > arr[j+1] {\n\t\t\t\tarr[j], arr[j+1] = arr[j+1], arr[j] // Go's concise swap\n\t\t\t}\n\t\t}\n\t}\n\treturn arr\n}\n\nfunc main() {\n\tmyArray := []int{64, 34, 25, 12, 22, 11, 90}\n\tsortedArray := bubbleSort(myArray)\n\tfmt.Println(\"Sorted array:\", sortedArray)\n}\n```\n\nRemember that Bubble Sort is inefficient for large datasets; consider more efficient algorithms like Merge Sort or Quick Sort for better performance in those cases.\n" },
                ],
            },
            {
                role: "user",
                parts: [
                    { text: "how are you?" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "I am doing well, thank you for asking!  As a large language model, I don't experience emotions or feelings in the same way humans do, but I'm functioning optimally and ready to assist you.  How can I help you today?\n" },
                ],
            },
        ],
    }
]