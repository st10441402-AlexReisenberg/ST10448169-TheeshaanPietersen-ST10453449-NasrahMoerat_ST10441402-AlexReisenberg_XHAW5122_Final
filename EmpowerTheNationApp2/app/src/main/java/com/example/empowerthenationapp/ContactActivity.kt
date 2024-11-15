package com.example.empowerthenationapp

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity

class ContactActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contact)
    }

    // Navigate back to Home Page
    fun goBackToHome(view: View) {
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
    }
}
