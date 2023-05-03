package codingpentagon.sms.backend.services;

import org.springframework.stereotype.Service;

import java.util.Calendar;

@Service
public class DateTimeService {
    public Calendar getToday() {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR, 5);
        calendar.set(Calendar.MINUTE, 30);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        calendar.set(Calendar.AM_PM, Calendar.AM);      //equals to 0:00 in UTC
        return calendar;
    }

    public Calendar getTomorrow() {
        Calendar calendar = this.getToday();
        calendar.add(Calendar.DATE, 1);
        return calendar;
    }

    public String getTodayName() {
        return this.getToday().getDisplayName(Calendar.DAY_OF_WEEK, Calendar.LONG, java.util.Locale.ENGLISH);
    }
}
