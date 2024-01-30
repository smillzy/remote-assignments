package com.remoteassignments.Assignments.remote;

import org.springframework.stereotype.Service;


@Service
public class NumberService {

    // int 的大小是 4 個位元組，可以儲存從 -2,147,483,648 到 2,147,483,647 的值
    // long 資料型別用於儲存 int 無法儲存的較大整數，可以儲存從 -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807 的值
    private boolean isLong(String number) {
        try {
            Long.parseLong(number);
            return true;  // 參數是數字，就會回傳true
        } catch (NumberFormatException e) { // 參數不是數字，就會跳NumberFormatException
            return false;  // false
        }
    }

    public String calculateSum(String number) {

        if (number == null || number.isEmpty()) { // 如果沒有參數，輸出錯誤
            return "Lack of Parameter";
        } else if (isLong(number)) {  // 如果有參數，並且參數為整數
            long n = Long.parseLong(number);  // 字串轉換成long
            long sum = n * (n + 1) / 2;
            return "Total:" + sum;
        } else { // 如果有參數，但參數非整數
            return "Wrong Parameter";
        }
    }

    public String generateHtmlForm() {
        return "<form action='/trackName' method='get'>" +  //get方法導到/trackName
                "<label for='nameInput'> What is your name: </label>" +
                "<input type='text' id='nameInput' name='username' required>" + // 輸入值，並設定要有值才可以提交
                "<button type='submit'>Submit</button>" +
                "</form>";
    }

}


