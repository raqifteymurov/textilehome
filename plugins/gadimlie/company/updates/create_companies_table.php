<?php namespace Gadimlie\Company\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateCompaniesTable extends Migration
{
    public function up()
    {
        Schema::create('gadimlie_company_companies', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('gadimlie_company_companies');
    }
}
