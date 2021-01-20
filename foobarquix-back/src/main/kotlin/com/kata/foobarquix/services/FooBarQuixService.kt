package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
    	val chars: CharArray = inputNumber.toString().toCharArray();

    	// Case when none of the rules apply then send back the number as String
    	if(inputNumber%3 != 0 && inputNumber%5 != 0 && !chars.contains('3') && !chars.contains('5') && !chars.contains('7')) {
    		return inputNumber.toString();
    	}

    	val sb = StringBuilder();
    	if(inputNumber%3 == 0 ) {
    		sb.append("Foo");
    	}
    	if(inputNumber%5 == 0 ) {
			sb.append("Bar");
    	}

    	for(c in chars) {
    		if (c == '3') {
    			sb.append("Foo");
			} else if (c == '5') {
    			sb.append("Bar");
    		} else if (c == '7') {
    			sb.append("Quix");
    		}
    	}
        return sb.toString();
    }   
}