<?php namespace Vadim\Testimonials\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

/**
 * CreateTestimonialsTable Migration
 */
class CreateTestimonialsTable extends Migration
{
    public function up()
    {
        Schema::create('vadim_testimonials_testimonials', function (Blueprint $table) {
            $table->engine="InnoDB";
            $table->increments('id');
            $table->string('name');
            $table->text('testimonial');
            $table->string('img');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('vadim_testimonials_testimonials');
    }
}
